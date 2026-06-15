import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, Shield, Zap, MessageSquare, Gift } from "lucide-react";

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

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error("Error submitting to waitlist:", err);
      setError("Произошла ошибка при отправке. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    { icon: Gift, text: "Приглашение в бета-версию" },
    { icon: MessageSquare, text: "Возможность активно влиять на разработку" },
    { icon: Zap, text: "Индивидуальный разбор твоего текущего завала задач" },
    { icon: Shield, text: "Полугодовой бесплатный доступ" },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 hero-gradient">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-card rounded-[2.5rem] p-8 md:p-14 border border-border shadow-glow text-center">

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ранний доступ без риска
            </h2>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
              Вступи в лист ожидания
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Если после первых шагов ты понимаешь, что это не твоё - просто скажешь об этом. Нам важнее понять, где система не закрывает твою проблему.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left bg-secondary/30 p-6 rounded-2xl">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-foreground/90">
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto relative z-10">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/70" />
                  <Input
                    type="email"
                    placeholder="Твой email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={`pl-12 h-14 text-base bg-background border-border shadow-inner focus:ring-2 focus:ring-primary/20 ${error ? "border-destructive focus:border-destructive" : ""
                      }`}
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-1 ml-1 text-left">{error}</p>
                  )}
                </div>

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
                  className="h-14 w-full text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Получить ранний доступ"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Никакого спама. Одно письмо о запуске и возможность отписаться в любой момент.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6 animate-in zoom-in spin-in-12 duration-500">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Готово!</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Мы отправили подтверждение. Проверь почту (и папку спам, на всякий случай).
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
