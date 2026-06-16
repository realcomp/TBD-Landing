import { resend, FROM_EMAIL } from "./resend";
import type { EmailLanguage } from "./email-translations";

function getAdminEmail(): string {
    return process.env.ADMIN_NOTIFICATION_EMAIL || "real310@gmail.com";
}

export async function notifyAdminNewSignup(params: {
    email: string;
    language: EmailLanguage;
    ip: string;
    userAgent: string;
}) {
    const { email, language, ip, userAgent } = params;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: getAdminEmail(),
            subject: "Новая регистрация — DTG Studio",
            html: `
        <p><strong>Новая регистрация в waitlist</strong></p>
        <p>Email: ${email}</p>
        <p>Дата: ${new Date().toISOString()}</p>
        <p>Язык: ${language}</p>
        <p>IP: ${ip}</p>
        <p>User-Agent: ${userAgent}</p>
      `,
        });
    } catch (error) {
        console.error("Admin notification (signup) error:", error);
    }
}

export async function notifyAdminEmailConfirmed(params: { email: string }) {
    const { email } = params;

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: getAdminEmail(),
            subject: "Email подтверждён — DTG Studio",
            html: `
        <p><strong>Пользователь подтвердил email</strong></p>
        <p>Email: ${email}</p>
        <p>Дата подтверждения: ${new Date().toISOString()}</p>
      `,
        });
    } catch (error) {
        console.error("Admin notification (confirm) error:", error);
    }
}
