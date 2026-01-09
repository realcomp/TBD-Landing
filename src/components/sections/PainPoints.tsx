import { AlertCircle } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    "Ты снова забыл важное, потому что оно было в чате или \"в голове\"",
    "Вечером ощущение \"весь день занят\", а прогресса не видно",
    "Проектов стало больше 2-3, и все начали мешаться",
    "Любая попытка \"навести порядок\" заканчивается длинным списком, который страшно открыть",
    "Ты делаешь план на каждый день, потом не успеваешь выполнить половину",
    "Ты уже пробовал Todoist, Notion, Trello - и всё равно держишь половину жизни в голове",
  ];

  return (
    <section className="relative py-24 px-4 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/landing-assets/XAc3zRRhMEF4Z3ibGb0FY.png")',
        }}
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="bg-card border border-border shadow-soft rounded-xl p-8 mb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Узнаешь себя?
          </h2>
          <p className="text-muted-foreground text-lg">
            Обычно это включается в такие моменты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                <AlertCircle className="w-4 h-4 text-destructive" />
              </div>
              <p className="text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-card border border-border shadow-soft rounded-xl p-8 text-center">
          <p className="text-lg md:text-xl font-medium text-foreground max-w-2xl mx-auto leading-relaxed">
            Если узнаёшь себя хотя бы в двух пунктах - тебе нужна не мотивация, а{" "}
            <span className="gradient-text font-bold">внешний контур управления</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
