import { Calendar, CalendarDays, Sparkles } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      icon: Calendar,
      period: "Через 7 дней",
      title: "Первый рабочий контур",
      points: [
        "Все входящие собраны в одной системе",
        "По каждому пункту принято решение: сделать, отложить, делегировать, выкинуть",
        "В фокусе остаются только реальные действия",
        "Ты впервые видишь полный объём дел, но он больше не давит",
      ],
      quote: "Список перестаёт быть угрозой. Он становится картой.",
    },
    {
      icon: CalendarDays,
      period: "Через месяц",
      title: "Система встраивается в жизнь",
      points: [
        "Ты перестаёшь открывать 5 приложений и искать, где что записано",
        "Разбор входящих занимает 10 минут, а не \"полдня разгребания\"",
        "Проекты не зависают - у каждого есть следующий конкретный шаг",
        "Уведомления не дёргают - ты сам решаешь, когда что смотреть",
      ],
      quote: "Цель - перестать жить в тревоге от незакрытых хвостов.",
    },
    {
      icon: Sparkles,
      period: "Через полгода",
      title: "В голове становится тихо",
      points: [
        "Фоновое \"надо то, надо это\" заметно исчезает",
        "Видно, какие проекты реально двигаются, а какие создают шум",
        "Ты не хватаешься за всё подряд - есть понятный фокус",
        "Дела не пропадают в мессенджерах и не висят \"в воздухе\"",
      ],
      quote: "Ты не становишься \"более дисциплинированным\". Ты просто перестаёшь быть единственной оперативной памятью.",
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 section-gradient">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Твоя трансформация
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Что изменится, если начать прямо сейчас
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-glow transition-all duration-500 group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{item.period}</p>
                  <h3 className="text-xl font-bold text-foreground mt-2">{item.title}</h3>
                </div>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="pt-4 border-t border-border">
                  <p className="text-sm italic text-foreground leading-relaxed">"{item.quote}"</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
