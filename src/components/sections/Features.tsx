import { Inbox, Wand2, FolderKanban, LayoutDashboard, Bell, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Inbox,
      title: "Единый входящий список",
      description: "Сюда скидываешь всё: дела, идеи, сообщения, напоминания",
    },
    {
      icon: Wand2,
      title: "Мастер выгрузки задач из головы",
      description: "Удобный опросник по ключевым зонам жизни поможет вспомнить всё, что висит фоном",
    },
    {
      icon: LayoutDashboard,
      title: "Мастер разбора входящих",
      description: "Пошаговый процесс, чтобы за быстро принимать решения",
    },
    {
      icon: FolderKanban,
      title: "Полки вместо хаоса",
      description: "\"На ближайшее время\", \"на неделе\", \"на потом\", \"жду от других\", \"справка\"",
    },
    {
      icon: Eye,
      title: "Ежедневный и еженедельный обзор",
      description: "Короткие сценарии, чтобы система не умирала",
    },
    {
      icon: Bell,
      title: "Уведомления без истерики",
      description: "Только то, что действительно нужно",
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-8 bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Что ты получаешь
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Не очередной таск-менеджер, а система для спокойной головы
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/50 rounded-2xl p-6 max-w-2xl">
            <p className="text-foreground font-medium">
              Если нужна ещё одна тетрадь со списками - их десятки. Если нужна{" "}
              <span className="gradient-text font-bold">спокойная голова и управляемая жизнь</span> - добро пожаловать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
