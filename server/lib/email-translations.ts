export type EmailLanguage = "ru" | "en" | "he";

interface EmailCopy {
  dir: "ltr" | "rtl";
  subject: string;
  title: string;
  body: string;
  button: string;
  disclaimer: string;
  rights: string;
}

export const EMAIL_COPY: Record<EmailLanguage, EmailCopy> = {
  ru: {
    dir: "ltr",
    subject: "Подтвердите вашу почту — DTG Studio",
    title: "Добро пожаловать в DTG Studio!",
    body: "Спасибо за интерес к нашему проекту. Пожалуйста, подтвердите вашу почту, чтобы получить ссылку на страницу регистрации.",
    button: "Подтвердить почту",
    disclaimer: "Если вы не оставляли заявку на нашем сайте, просто проигнорируйте это письмо.",
    rights: "Все права защищены.",
  },
  en: {
    dir: "ltr",
    subject: "Confirm your email — DTG Studio",
    title: "Welcome to DTG Studio!",
    body: "Thanks for your interest in our project. Please confirm your email to get the link to the sign-up page.",
    button: "Confirm email",
    disclaimer: "If you didn't sign up on our website, just ignore this email.",
    rights: "All rights reserved.",
  },
  he: {
    dir: "rtl",
    subject: "אשר את כתובת האימייל שלך — DTG Studio",
    title: "ברוך הבא ל-DTG Studio!",
    body: "תודה על העניין בפרויקט שלנו. אנא אשר את כתובת האימייל שלך כדי לקבל קישור לעמוד ההרשמה.",
    button: "אישור אימייל",
    disclaimer: "אם לא נרשמת באתר שלנו, פשוט התעלם מהודעה זו.",
    rights: "כל הזכויות שמורות.",
  },
};

export function isSupportedEmailLanguage(value: unknown): value is EmailLanguage {
  return value === "ru" || value === "en" || value === "he";
}
