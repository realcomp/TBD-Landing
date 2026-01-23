import { Resend } from 'resend';

let resendInstance: Resend | null = null;

export const resend = {
    get instance(): Resend {
        if (resendInstance) return resendInstance;

        const resendApiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

        if (!resendApiKey) {
            throw new Error('RESEND_API_KEY (or VITE_RESEND_API_KEY) missing in environment variables');
        }

        resendInstance = new Resend(resendApiKey);
        return resendInstance;
    },

    get emails() {
        return this.instance.emails;
    }
};

export const FROM_EMAIL = 'no-reply@dtg.sportomatics.com';
