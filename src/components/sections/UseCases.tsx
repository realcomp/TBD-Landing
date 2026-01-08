import { Code, Home, Briefcase } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Code,
      role: "Разработчик",
      scenario: "с несколькими проектами",
      image: "/lT0M9AvZ7sGuWch1UN-Iy.png",
      story: "Когда у меня 3 параллельных проекта и входящие летят из чатов и почты, я хочу каждый день за 10 минут понимать следующий шаг по каждому проекту, чтобы вечером видеть прогресс, а не просто усталость.",
    },
    {
      icon: Home,
      role: "Работающий человек",
      scenario: "с семьёй",
      image: "/XIX5f-caehFXELgqOg37C.png",
      story: "Когда после работы меня ждут домашние дела и просьбы близких, я хочу разгрузить голову заранее, чтобы вечером быть дома, а не прокручивать незакрытые хвосты.",
    },
    {
      icon: Briefcase,
      role: "Фрилансер",
      scenario: "с несколькими клиентами",
      image: "/pxCzd_RuK71yhnnUqx3C1.png",
      story: "Когда у меня 5 клиентов и задачи сыпятся в разные каналы, я хочу держать всё в одном контуре и видеть приоритеты по срокам, чтобы не дёргаться и не извиняться.",
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 section-gradient">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как это выглядит в реальных контекстах
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden flex flex-col"
            >
              {useCase.image && (
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.role}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{useCase.role}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.scenario}</p>
                  </div>
                </div>

                <blockquote className="relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</span>
                  <p className="text-muted-foreground leading-relaxed pl-4 italic">
                    {useCase.story}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
