import { SlidersHorizontal, Layers, CheckSquare, Clock, BrainCircuit, CalendarCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: SlidersHorizontal,
      title: "Мастер разбора",
      description: "Мастер разбора задач за 6 шагов раскладывает хаос по группам «сделать в ближайшее время», «сделать к определенному сроку», «делегировано», «сделать когда-нибудь» и позволяет с одной стороны сохранять все мысли, с другой – не терять из фокуса то, что сейчас главное для тебя.",
    },
    {
      icon: CheckSquare,
      title: "Гибкий список",
      description: "В итоге ты получаешь не пять обязательных запланированных задач с последующим чувством вины за невыполненное, а список из 20-40 выбранных тобой действительно важных в настоящий момент задач, из которых ты берешь и выполняешь любую по ситуации.",
    },
    {
      icon: Clock,
      title: "Реальные дедлайны",
      description: "Реальные дедлайны с датами живут отдельно - система напомнит о них вовремя, не превращая каждый день в красную свалку просроченного.",
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 bg-card relative overflow-hidden">
      {/* Texture or Bg Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Список готовых действий вместо ежедневного планирования
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Что ты получаешь: это не планировщик дня, а система гибкого выбора по контексту.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-1"
              >
                <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 group hover:shadow-glow transition-all duration-500">
              <img
                src="/landing-assets/lT0M9AvZ7sGuWch1UN-Iy.png"
                alt="Interface"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* Decorative elements behind */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-accent/50 to-secondary rounded-3xl p-8 max-w-3xl border border-border shadow-sm">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              Если нужен ещё один планировщик дня с чувством вины за невыполненное - их десятки.
              <br className="hidden sm:block" />
              Если нужна <span className="gradient-text font-bold">гибкость выбирать по ситуации без демотивации</span> - добро пожаловать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
