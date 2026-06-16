import { EMAIL_COPY, type EmailLanguage } from "./email-translations";

export const getConfirmationEmailHtml = (confirmUrl: string, lang: EmailLanguage = "ru") => {
    const copy = EMAIL_COPY[lang];
    const primaryColor = '#22c55e'; // Matching the primary color 154 47% 41% approx or the standard green
    const logoUrl = 'https://dtg.sportomatics.com/logo.png';

    return `
    <!DOCTYPE html>
    <html lang="${lang}" dir="${copy.dir}">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #334155;
          margin: 0;
          padding: 0;
          background-color: #f8fafc;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header {
          padding: 32px;
          text-align: center;
          border-bottom: 1px solid #f1f5f9;
        }
        .logo {
          height: 48px;
          margin-bottom: 16px;
        }
        .content {
          padding: 32px;
        }
        h2 {
          color: #1e293b;
          font-size: 24px;
          font-weight: 800;
          margin-top: 0;
          margin-bottom: 16px;
        }
        p {
          margin-bottom: 24px;
          font-size: 16px;
        }
        .button {
          display: inline-block;
          background-color: ${primaryColor};
          color: #ffffff !important;
          padding: 14px 28px;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: background-color 0.2s;
        }
        .footer {
          padding: 24px 32px;
          background-color: #f8fafc;
          text-align: center;
          font-size: 14px;
          color: #94a3b8;
        }
        .social-links {
          margin-top: 16px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="DTG Studio" class="logo">
          <h2>${copy.title}</h2>
        </div>
        <div class="content">
          <p>${copy.body}</p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="${confirmUrl}" class="button">${copy.button}</a>
          </div>
          <p style="font-size: 14px; color: #64748b;">${copy.disclaimer}</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} DTG Studio. ${copy.rights}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
