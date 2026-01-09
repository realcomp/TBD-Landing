import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const bullets = [
    "Один список вместо головы, мессенджеров и случайных заметок",
    "Пошаговый разбор входящих - не \"планируй\", а \"решай\"",
    "На выходе - короткий план на ближайшее время и спокойная голова",
  ];

  return (
    <section className="hero-gradient min-h-screen flex items-center py-20 px-4 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Когда задачи расползаются по голове, чатам и заметкам - {" "}
              <span className="gradient-text">собери их в один список</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Ты постоянно напряжен: держишь в голове десятки задач и живешь с ощущением, что постоянно что-то забываешь?
              За 1-2 дня ты соберешь все свои задачи в один список, отсортируешь их по степени важности, и перестанешь заботиться о том, что что-то забыл.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 pt-4">
              <Button onClick={scrollToWaitlist} size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-glow hover:shadow-soft transition-shadow">
                Вступить в лист ожидания
              </Button>
              <p className="text-sm text-muted-foreground max-w-md">
                Ранний доступ в закрытый запуск и 6 месяцев бесплатного использования для первых 100 пользователей.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-card rounded-2xl shadow-soft p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">📥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Бери и делай</p>
                    <p className="text-sm text-muted-foreground">Осталось 7 задач</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Ответить на письмо", tag: "Проект DTG", color: "bg-destructive/10 text-destructive" },
                    { label: "Купить билеты", tag: "Отпуск", color: "bg-accent text-accent-foreground" },
                    { label: "Оплатить счета", tag: "Домашние дела", color: "bg-primary/10 text-primary" },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <span className="text-sm font-medium text-foreground">{task.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-md ${task.color}`}>{task.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
