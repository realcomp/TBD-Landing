import { CheckCircle2 } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    "Тем, у кого много входящих каждый день и разные источники задач",
    "Тем, у кого несколько проектов параллельно",
    "Тем, кто уже пробовал инструменты и понял, что проблема не в кнопках, а в принятии решений",
    "Тем, кто устал быть собственной оперативной памятью",
  ];

  return (
    <section className="py-24 px-4 lg:px-8 bg-card">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Кому это действительно нужно
          </h2>
        </div>

        <div className="space-y-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-accent/30 border border-primary/10"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-lg leading-relaxed">{audience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
