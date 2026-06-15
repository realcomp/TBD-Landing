import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    "Тем, кто устал планировать день и чувствовать провал к вечеру",
    "Тем, кто делает 2 задачи из 5 запланированных и демотивируется",
    "Тем, у кого реальность постоянно ломает планы, и системы перестают работать",
    "Тем, кто хочет гибкости выбора вместо жесткого расписания",
  ];

  return (
    <section className="py-24 px-4 lg:px-8 section-gradient">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Кому это действительно нужно
          </h2>
          <p className="text-muted-foreground text-lg">
            Как это выглядит в реальных контекстах
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/50 group">
              <img
                src="/landing-assets/XIX5f-caehFXELgqOg37C.png"
                alt="User Portrait"
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-transparent pointer-events-none" />
            </div>

            {/* Decorative blob */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-foreground text-lg font-medium leading-relaxed">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
