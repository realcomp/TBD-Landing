import { BookOpen, Brain, ListTodo, RefreshCcw } from "lucide-react";

const Method = () => {
  const principles = [
    { icon: Brain, text: "Ничего не держать в голове" },
    { icon: ListTodo, text: "Разбирать входящее через решения, а не сортировку" },
    { icon: BookOpen, text: "Отделять проекты от конкретных действий" },
    { icon: RefreshCcw, text: "Делать регулярный короткий обзор" },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 section-gradient">
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
          <div className="w-full aspect-[21/9] overflow-hidden">
            <img
              src="/51LtmuPkimjfd17PoiUEk.png"
              alt="GTD Method"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                В основе метода
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Getting Things Done (GTD)
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Но без религиозности
              </p>
            </div>

            <p className="text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
              Это способ структурирования задач, который разработал Дэвид Аллен. Он десятилетиями работал консультантом по личной эффективности. Методике больше 30 лет практики, а книга стала базовой для людей, уставших жить в режиме постоянного пожара.
            </p>

            <div className="bg-secondary/30 rounded-2xl p-6 mb-8">
              <p className="text-foreground text-center font-medium">
                Но тебе не нужно "изучать метод". Тебе нужен результат: чтобы входящие перестали давить и стало понятно, что делать дальше.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{principle.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
