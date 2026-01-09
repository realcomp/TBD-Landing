import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
const resend = new Resend(process.env.RESEND_API_KEY);

const server = Bun.serve({
    port: 3001,
    async fetch(req) {
        const url = new URL(req.url);

        if (req.method === "GET" && url.pathname === "/api/waitlist/confirm") {
            const token = url.searchParams.get('token');

            const getHtmlResponse = (title: string, text: string) => {
                const html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f4f7;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            max-width: 440px;
            width: 100%;
            text-align: center;
        }
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
            color: #1a1a1a;
            line-height: 1.3;
        }
        p {
            line-height: 1.6;
            color: #555;
            margin: 0;
        }
        .logo {
            margin-bottom: 1.5rem;
            font-weight: 800;
            font-size: 1.2rem;
            letter-spacing: -0.02em;
            color: #000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">DTG Studio</div>
        <h1>${title}</h1>
        <p>${text}</p>
    </div>
</body>
</html>`;
                return new Response(html, {
                    headers: { "Content-Type": "text/html; charset=utf-8" },
                    status: 200
                });
            };

            if (!token) {
                return getHtmlResponse(
                    "Ссылка устарела или неверна",
                    "Если хочешь попасть в лист ожидания DTG Studio, зайди на <a href=\"https://dtg.sportomatics.com\" style=\"color: #000; text-decoration: underline;\">dtg.sportomatics.com</a> и оставь свой email ещё раз."
                );
            }

            try {
                const { data: entry, error: findError } = await supabase
                    .from('waiting_list')
                    .select('*')
                    .eq('confirm_token', token)
                    .maybeSingle();

                if (findError || !entry) {
                    return getHtmlResponse(
                        "Ссылка устарела или неверна",
                        "Если хочешь попасть в лист ожидания DTG Studio, зайди на <a href=\"https://dtg.sportomatics.com\" style=\"color: #000; text-decoration: underline;\">dtg.sportomatics.com</a> и оставь свой email ещё раз."
                    );
                }

                if (entry.status === 'confirmed') {
                    return getHtmlResponse(
                        "Этот email уже подтверждён",
                        "Этот адрес уже находится в листе ожидания DTG Studio. Ничего делать не нужно."
                    );
                }

                if (entry.status === 'pending') {
                    const { error: updateError } = await supabase
                        .from('waiting_list')
                        .update({
                            status: 'confirmed',
                            confirmed_at: new Date().toISOString()
                        })
                        .eq('id', entry.id);

                    if (updateError) {
                        console.error("Update confirmation error:", updateError);
                        throw updateError;
                    }

                    return getHtmlResponse(
                        "Готово, ты в листе ожидания DTG Studio",
                        "Мы напишем на этот email, когда сервис будет готов к запуску. Спасибо, что записался."
                    );
                }

                return getHtmlResponse(
                    "Ссылка устарела или неверна",
                    "Если хочешь попасть в лист ожидания DTG Studio, зайди на <a href=\"https://dtg.sportomatics.com\" style=\"color: #000; text-decoration: underline;\">dtg.sportomatics.com</a> и оставь свой email ещё раз."
                );

            } catch (err) {
                console.error("Confirmation process error:", err);
                return getHtmlResponse(
                    "Техническая ошибка",
                    "Пожалуйста, попробуйте позже или свяжитесь с поддержкой."
                );
            }
        }

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
