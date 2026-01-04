import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, Shield, Gift, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success("Отлично! Ты в списке ожидания.");
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-base bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="h-14 px-8 text-base shadow-glow">
                  Вступить в лист ожидания
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
                Мы свяжемся с тобой, когда всё будет готово к запуску.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
