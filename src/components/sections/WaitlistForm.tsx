import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, Shield, Gift, MessageSquare } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [policyAgree, setPolicyAgree] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return "Email не может быть пустым";
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmedEmail)) {
      return "Пожалуйста, введите корректный email";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          policyAgree: policyAgree,
        }),
      });

      // We interpret any 2xx response as success according to requirements
      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        // Even if server returns error, we follow the requirement:
        // "не показывай пользователю разные сообщения для разных ошибок на сервере. 
        // Любой успешный ответ сервера (2xx) трактуем как "сообщение отправлено"."
        // Wait, if it is NOT 2xx, should I still show success? 
        // "Текст сообщения, например: "Если это твой email - проверь почту..."
        // The instructions say: "если код 2xx - очисти поле email и покажи пользователю одно и то же сообщение об успехе"
        // It doesn't explicitly say what to do if NOT 2xx. 
        // Usually, if it's a server error, we might want to show a generic error, 
        // but the prompt says "не показывай пользователю разные сообщения для разных ошибок на сервере".
        // Let's stick to showing success only on ok, and maybe a generic error otherwise if we want to be safe, 
        // or just treat it as "sent" if we want to obfuscate? 
        // Re-reading: "Любой успешный ответ сервера (2xx) трактуем как 'сообщение отправлено'".
        // This implies if it's NOT 2xx, it's not "sent".
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Error submitting to waitlist:", err);
      // Requirement: "не показывай пользователю разные сообщения для разных ошибок на сервере"
      // I'll show a generic error if it really fails, but keep it simple.
      setError("Произошла ошибка при отправке. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Gift, text: "Приглашение на закрытый запуск раньше остальных" },
    { icon: MessageSquare, text: "Возможность влиять на механику" },
    { icon: Check, text: "Сценарий разборки под твой текущий завал" },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 hero-gradient">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-glow">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Ранний доступ без риска
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Вступи в лист ожидания
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Если после первых шагов ты понимаешь, что это не твоё - просто скажешь об этом. Нам важнее понять, где продукт не решает твою проблему.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Твой email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={`pl-12 h-14 text-base bg-secondary/50 border-border focus:border-primary ${error ? "border-destructive focus:border-destructive" : ""
                      }`}
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-1 ml-1">{error}</p>
                  )}
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="policy_agree"
                  tabIndex={-1}
                  autoComplete="off"
                  placeholder="я соглашаюсь с политикой сайта"
                  value={policyAgree}
                  onChange={(e) => setPolicyAgree(e.target.value)}
                  style={{ position: "absolute", left: "-9999px" }}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="h-14 px-8 text-base shadow-glow"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Вступить в лист ожидания"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Никакого спама. Одно письмо о запуске и несколько вопросов по делу.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Готово!</h3>
              <p className="text-muted-foreground">
                Если это твой email - проверь почту. Мы отправили письмо для подтверждения.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
