import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const server = Bun.serve({
    port: 3001,
    async fetch(req) {
        const url = new URL(req.url);

        if (req.method === "POST" && url.pathname === "/api/waitlist") {
            try {
                let body;
                try {
                    body = await req.json();
                } catch (e) {
                    return Response.json({ error: "invalid_json" }, { status: 400 });
                }

                let { email, policyAgree } = body;

                // 1) Parse and sanitize
                if (!email) {
                    return Response.json({ error: "invalid_email" }, { status: 400 });
                }
                email = email.trim().toLowerCase();

                // 2) Honeypot
                if (policyAgree) {
                    console.log("Bot detected (honeypot filled)");
                    return Response.json({ ok: true });
                }

                // 3) Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    return Response.json({ error: "invalid_email" }, { status: 400 });
                }

                // 4) IP and User-Agent
                const signup_ip = req.headers.get("x-forwarded-for") || "unknown";
                const signup_user_agent = req.headers.get("user-agent") || "";

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
                    return Response.json({ ok: true });
                }

                // 6) Logic by email
                const { data: existing, error: selectError } = await supabase
                    .from('waiting_list')
                    .select('*')
                    .eq('email', email)
                    .maybeSingle();

                if (selectError) {
                    console.error("Database select error:", selectError);
                    return Response.json({ error: "database_error" }, { status: 500 });
                }

                const now = new Date();
                const dateStr = now.toISOString().split('T')[0];
                const timeStr = now.toTimeString().split(' ')[0];
                const referer = req.headers.get('referer') || 'direct';

                async function sendConfirmation(token: string) {
                    const confirmLink = `https://dtg.sportomatics.com/api/waitlist/confirm?token=${token}`;
                    const subject = "Подтверди регистрацию в листе ожидания DTG Studio";
                    const html = `
                        <p>Ты получил это письмо, потому что кто-то (возможно ты) оставил этот email на <a href="https://dtg.sportomatics.com">dtg.sportomatics.com</a>.</p>
                        <p>Для подтверждения регистрации в листе ожидания перейди по ссылке:</p>
                        <p><a href="${confirmLink}">${confirmLink}</a></p>
                        <p>Если ты не оставлял этот email - просто проигнорируй письмо.</p>
                    `;

                    const RESEND_API_KEY = process.env.RESEND_API_KEY;
                    if (!RESEND_API_KEY) {
                        console.error("RESEND_API_KEY is missing. Email not sent.");
                        return;
                    }

                    try {
                        const response = await fetch('https://api.resend.com/emails', {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${RESEND_API_KEY}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                from: 'DTG Studio <no-reply@dtg.sportomatics.com>',
                                to: [email],
                                subject: subject,
                                html: html
                            })
                        });
                        if (!response.ok) {
                            const errData = await response.json();
                            console.error("Resend API error:", errData);
                        }
                    } catch (err) {
                        console.error("Failed to send email via Resend:", err);
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
                        return Response.json({ error: "database_error" }, { status: 500 });
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
                        return Response.json({ ok: true });
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

                return Response.json({ ok: true });
            } catch (err) {
                console.error("Request handling error:", err);
                return Response.json({ ok: true });
            }
        }

        return new Response("Not Found", { status: 404 });
    },
});

console.log(`API Server running at http://localhost:${server.port}`);
