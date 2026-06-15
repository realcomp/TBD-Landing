import { Calendar, Zap, Rocket } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      icon: Calendar,
      period: "Через 7 дней",
      title: "Первый рабочий контур",
      description: "Весь завал обработан через мастер выгрузки задач из головы и превращен в два-три десятка задач, сгруппированных в проекты или отдельных, а неважные задачи типа...",
      details: "", // Details missing in source
      highlight: "", // Highlight missing in source
      image: "/landing-assets/51LtmuPkimjfd17PoiUEk.png"
    },
    {
      icon: Zap,
      period: "Через месяц",
      title: "Система работает на автомате",
      description: "Новая задача - быстрый ответ на 3-4 вопроса, и она легла в правильный контекст.",
      details: "Тебе не нужно каждое утро решать \"что делать сегодня\". День прошел не по плану? Нормально. Сделал 3 задачи вместо 5? Это прогресс, а не провал.",
      highlight: "Ты не живешь по расписанию. Ты выбираешь по ситуации из готового списка.",
      image: "/landing-assets/pxCzd_RuK71yhnnUqx3C1.png"
    },
    {
      icon: Rocket,
      period: "Через полгода",
      title: "Решения принимаются в моменте",
      description: "Пришла новая задача - за 30 секунд прогнал через мастер, она легла в систему и появится когда нужно.",
      details: "Утро не начинается с мучительного планирования. Нет ощущения \"опять не выполнил план\" - потому что ты не предсказываешь будущее, ты работаешь с настоящим.",
      highlight: "Ты не становишься более дисциплинированным. Ты просто перестаешь планировать то, что невозможно предсказать."
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 section-gradient">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Твоя трансформация
          </h2>
          <p className="text-muted-foreground text-xl">
            Что изменится, если начать прямо сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-card rounded-[2rem] p-8 border border-border shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-500 group flex flex-col"
            >
              <div className="mb-6 relative">
                <div className="w-full h-48 bg-secondary/50 rounded-2xl mb-6 flex flex-col items-center justify-center border-2 border-dashed border-primary/10 overflow-hidden group-hover:border-primary/30 transition-colors">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <item.icon className="w-10 h-10 text-muted-foreground/20 mb-2" />
                      <p className="text-xs font-bold text-muted-foreground/30 uppercase tracking-widest">Image Placeholder</p>
                      <p className="text-[10px] text-muted-foreground/30">{item.period} visualization</p>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur shadow-sm flex items-center justify-center ring-1 ring-border/50">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {item.period}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <p className="text-sm font-medium text-primary leading-relaxed italic">
                  "{item.highlight}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
