import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Bullets removed
  // const bullets = [];

  return (
    <section className="hero-gradient min-h-screen flex items-center py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[100px] -z-10" />

      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground tracking-tight">
              Перестань планировать день и <span className="gradient-text">чувствовать провал</span> к вечеру
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Каждое утро составляешь план из пяти задач, к вечеру делаешь две и ощущаешь себя неудачником?
              <br /><br />
              При помощи DTG Studio ты за пару часов прогоняешь весь завал через «мастер разбора» и получаешь список готовых действий. Утром ты больше не пишешь план, ты открываешь систему и смотришь, что можно сделать прямо сейчас. Сделал хотя бы одну задачу - уже прогресс. Не получилось сделать – не беда, планов и не было.
            </p>

            {/* Bullets removed */}
            {/* <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base md:text-lg text-foreground/80">{bullet}</span>
                </li>
              ))}
            </ul> */}

            <div className="space-y-4 pt-4">
              <Button onClick={scrollToWaitlist} size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl shadow-glow hover:shadow-soft hover:scale-105 transition-all duration-300">
                Вступить в лист ожидания
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground max-w-md border-l-2 border-primary/20 pl-4 py-1">
                Ранний доступ в закрытый запуск и 2 месяца бесплатного использования для первых 100 пользователей.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* App Mockup Visualization */}
            <div className="relative z-10 bg-card/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20 ring-1 ring-black/5">
              <div className="space-y-5">
                {/* Header Mock */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                      <span className="text-xl font-bold">D</span>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Мой список</p>
                      <p className="text-xs text-muted-foreground">Доступно: 12 действий</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/50" />
                    <div className="w-8 h-8 rounded-lg bg-secondary/50" />
                  </div>
                </div>

                {/* List Mock */}
                <div className="space-y-3">
                  {[
                    { label: "Выбрать отель", ctx: "@компьютер", time: "15 мин", color: "bg-blue-500/10 text-blue-600" },
                    { label: "Позвонить юристу", ctx: "@телефон", time: "5 мин", color: "bg-green-500/10 text-green-600" },
                    { label: "Оплатить налоги", ctx: "@финансы", time: "30 мин", color: "bg-purple-500/10 text-purple-600" },
                    { label: "Заказать воду", ctx: "@дом", time: "2 мин", color: "bg-orange-500/10 text-orange-600" },
                  ].map((task, i) => (
                    <div key={i} className="group flex items-center justify-between p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary transition-colors" />
                        <span className="font-medium text-foreground">{task.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${task.color}`}>{task.ctx}</span>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">{task.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating "Add" Button Mock */}
                <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-glow flex items-center justify-center text-2xl cursor-pointer hover:bg-primary/90 transition-colors">
                  +
                </div>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
