import http from 'http';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables manually
function loadEnv() {
    const envPath = path.resolve(__dirname, '.env.local');
    if (fs.existsSync(envPath)) {
        const env = fs.readFileSync(envPath, 'utf8');
        env.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
            }
        });
    }
}

loadEnv();

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Critical: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/api/waitlist') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                let { email, policyAgree } = JSON.parse(body);

                // 1) Parse and sanitize
                if (!email) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: "invalid_email" }));
                    return;
                }
                email = email.trim().toLowerCase();

                // 2) Honeypot
                if (policyAgree) {
                    console.log("Bot detected (honeypot filled)");
                    res.statusCode = 200;
                    res.end(JSON.stringify({ ok: true }));
                    return;
                }

                // 3) Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: "invalid_email" }));
                    return;
                }

                // 4) IP and User-Agent
                const signup_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
                const signup_user_agent = req.headers['user-agent'];

                // 5) Rate limit by IP (last hour > 20)
                const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
                const { count: ipCount, error: countError } = await supabase
                    .from('waiting_list')
                    .select('*', { count: 'exact', head: true })
                    .eq('signup_ip', signup_ip)
                    .gt('created_at', oneHourAgo);

                if (countError) {
                    console.error("Rate limit check error:", countError);
                } else if (ipCount !== null && ipCount > 20) {
                    console.log(`Rate limit hit for IP: ${signup_ip}`);
                    res.statusCode = 200;
                    res.end(JSON.stringify({ ok: true }));
                    return;
                }

                // 6) Logic by email
                const { data: existing, error: selectError } = await supabase
                    .from('waiting_list')
                    .select('*')
                    .eq('email', email)
                    .maybeSingle();

                if (selectError) {
                    console.error("Database select error:", selectError);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: "database_error" }));
                    return;
                }

                const now = new Date();
                const dateStr = now.toISOString().split('T')[0];
                const timeStr = now.toTimeString().split(' ')[0];
                const referer = req.headers['referer'] || 'direct';

                async function sendConfirmation(token) {
                    const confirmLink = `https://dtg.sportomatics.com/api/waitlist/confirm?token=${token}`;
                    const subject = "Подтверди регистрацию в листе ожидания DTG Studio";
                    const html = `
                        <p>Ты получил это письмо, потому что кто-то (возможно ты) оставил этот email на <a href="https://dtg.sportomatics.com">dtg.sportomatics.com</a>.</p>
                        <p>Для подтверждения регистрации в листе ожидания перейди по ссылке:</p>
                        <p><a href="${confirmLink}">${confirmLink}</a></p>
                        <p>Если ты не оставлял этот email - просто проигнорируй письмо.</p>
                    `;

                    if (!process.env.RESEND_API_KEY) {
                        console.error("RESEND_API_KEY is missing. Email not sent.");
                        return;
                    }

                    try {
                        const { error } = await resend.emails.send({
                            from: 'DTG Studio <no-reply@dtg.sportomatics.com>',
                            to: [email],
                            subject: subject,
                            html: html
                        });
                        if (error) {
                            console.error("Resend error:", error);
                        }
                    } catch (err) {
                        console.error("Failed to send email via Resend SDK:", err);
                    }
                }

                if (!existing) {
                    // Branch A: New record
                    const confirm_token = crypto.randomUUID();
                    const { error: insertError } = await supabase
                        .from('waiting_list')
                        .insert([{
                            email,
                            status: 'pending',
                            confirm_token,
                            signup_ip,
                            signup_user_agent,
                            last_confirmation_sent_at: now.toISOString(),
                            invited: false,
                            date: dateStr,
                            time: timeStr,
                            link: referer
                        }]);

                    if (insertError) {
                        console.error("Insert error:", insertError);
                        res.statusCode = 500;
                        res.end(JSON.stringify({ error: "database_error" }));
                        return;
                    }

                    await sendConfirmation(confirm_token);
                } else if (existing.status === 'confirmed') {
                    // Branch B: Confirmed
                    await supabase
                        .from('waiting_list')
                        .update({
                            signup_ip,
                            signup_user_agent
                        })
                        .eq('id', existing.id);
                } else {
                    // Branch C: Pending
                    const lastSent = existing.last_confirmation_sent_at ? new Date(existing.last_confirmation_sent_at) : null;
                    const twelveHoursAgo = new Date(Date.now() - 12 * 3600000);

                    if (lastSent && lastSent > twelveHoursAgo) {
                        // Resent too recently
                        res.statusCode = 200;
                        res.end(JSON.stringify({ ok: true }));
                        return;
                    } else {
                        const new_token = crypto.randomUUID();
                        await supabase
                            .from('waiting_list')
                            .update({
                                confirm_token: new_token,
                                last_confirmation_sent_at: now.toISOString(),
                                signup_ip,
                                signup_user_agent
                            })
                            .eq('id', existing.id);

                        await sendConfirmation(new_token);
                    }
                }

                res.statusCode = 200;
                res.end(JSON.stringify({ ok: true }));
            } catch (err) {
                console.error("Request handling error:", err);
                res.statusCode = 200; // Obfuscate error as success according to requirements?
                // Actually the requirements say: "Во всех нормальных сценариях ... возвращать 200 { ok: true }."
                // "400 только для invalid_email."
                // So if something crashed, maybe it's better to return 200 or 500 depending on how much we want to hide.
                // I'll return 200 to be safe and match the "always success" feel for the client.
                res.end(JSON.stringify({ ok: true }));
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`API Server running at http://localhost:${PORT}`);
});
