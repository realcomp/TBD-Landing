import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase";
import { resend, FROM_EMAIL } from "../lib/resend";
import { isSupportedEmailLanguage, type EmailLanguage } from "../lib/email-translations";
import { notifyAdminNewSignup, notifyAdminEmailConfirmed } from "../lib/admin-notifications";

export const handleWaitlist: RequestHandler = async (req, res) => {
    const { email, policyAgree, lang } = req.body;
    const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";
    const language: EmailLanguage = isSupportedEmailLanguage(lang) ? lang : "ru";

    // Sanitize email
    const sanitizedEmail = email?.trim().toLowerCase();
    if (!sanitizedEmail) {
        return res.status(400).json({ ok: false, message: "Email is required" });
    }

    // Honeypot check
    if (policyAgree) {
        console.log(`Bot detected from IP: ${ip}`);
        return res.json({ ok: true });
    }

    try {
        // Rate limiting check: last hour from same IP
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
        const { count, error: rateError } = await supabase
            .from("waiting_list")
            .select("*", { count: "exact", head: true })
            .eq("signup_ip", ip)
            .gt("created_at", oneHourAgo);

        if (rateError) throw rateError;
        if (count && count > 20) {
            console.log(`Rate limit exceeded for IP: ${ip}`);
            return res.json({ ok: true }); // Silent skip
        }

        // Check if email already exists
        const { data: existing, error: fetchError } = await supabase
            .from("waiting_list")
            .select("*")
            .eq("email", sanitizedEmail)
            .single();

        if (fetchError && fetchError.code !== "PGRST116") throw fetchError;

        if (existing) {
            if (existing.status === "confirmed") {
                // Case B: Already confirmed, just update IP/UA
                await supabase
                    .from("waiting_list")
                    .update({ signup_ip: ip, signup_user_agent: userAgent })
                    .eq("id", existing.id);

                return res.json({ ok: true, message: "Already joined" });
            } else {
                // Case C: Pending, check if > 12h
                const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000).getTime();
                const lastSentAt = new Date(existing.last_confirmation_sent_at).getTime();

                if (twelveHoursAgo > lastSentAt) {
                    const newToken = uuidv4();
                    await supabase
                        .from("waiting_list")
                        .update({
                            confirm_token: newToken,
                            last_confirmation_sent_at: new Date().toISOString(),
                            signup_ip: ip,
                            signup_user_agent: userAgent
                        })
                        .eq("id", existing.id);

                    await sendConfirmationEmail(sanitizedEmail, newToken, language);
                }
                return res.json({ ok: true, message: "Confirmation resent if needed" });
            }
        }

        // Case A: New Email
        const token = uuidv4();
        const { error: insertError } = await supabase.from("waiting_list").insert({
            email: sanitizedEmail,
            confirm_token: token,
            signup_ip: ip,
            signup_user_agent: userAgent,
            status: "pending",
        });

        if (insertError) throw insertError;

        await sendConfirmationEmail(sanitizedEmail, token, language);

        notifyAdminNewSignup({ email: sanitizedEmail, language, ip: String(ip), userAgent: String(userAgent) });

        return res.json({ ok: true });
    } catch (error) {
        console.error("Waitlist error:", error);
        return res.status(500).json({ ok: false, message: "Internal server error" });
    }
};

export const handleConfirm: RequestHandler = async (req, res) => {
    const token = req.query.token as string;

    if (!token) {
        return res.status(400).send("Token is required");
    }

    try {
        const { data: entry, error: fetchError } = await supabase
            .from("waiting_list")
            .select("*")
            .eq("confirm_token", token)
            .single();

        if (fetchError || !entry) {
            return res.status(404).send("Invalid or expired token");
        }

        if (entry.status !== "confirmed") {
            const { error: updateError } = await supabase
                .from("waiting_list")
                .update({
                    status: "confirmed",
                    confirmed_at: new Date().toISOString(),
                })
                .eq("id", entry.id);

            if (updateError) throw updateError;

            notifyAdminEmailConfirmed({ email: entry.email });
        }

        res.redirect("https://dtg.sportomatics.com/login?redirect=%2Finbox");
    } catch (error) {
        console.error("Confirmation error:", error);
        res.status(500).send("Internal server error");
    }
};

import { getConfirmationEmailHtml } from "../lib/email-template";
import { EMAIL_COPY } from "../lib/email-translations";

async function sendConfirmationEmail(email: string, token: string, language: EmailLanguage) {
    const appUrl = process.env.VITE_APP_URL || process.env.APP_URL || 'https://dtg.sportomatics.com';
    const confirmUrl = `${appUrl}/api/waitlist/confirm?token=${token}`;

    await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: EMAIL_COPY[language].subject,
        html: getConfirmationEmailHtml(confirmUrl, language),
    });
}
