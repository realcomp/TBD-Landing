import { AlertCircle, XCircle } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    "Составил план на день из пяти задач, к вечеру сделал две, чувствуешь вину",
    "Todoist показывает \"12 просроченных\", и ты избегаешь его открывать",
    "Реальность ломает планы: звонок, срочная задача, встреча затянулась и все задачи посыпались как домино",
    "Пробовал time blocking, и календарь развалился через час",
  ];

  return (
    <section className="relative py-24 px-4 lg:px-8 overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/landing-assets/XAc3zRRhMEF4Z3ibGb0FY.png"
          alt="Problem Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-0 pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4">
            Проблематика
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Узнаешь себя?
          </h2>
          <p className="text-xl text-muted-foreground">
            Обычно это включается в такие моменты:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-soft hover:border-destructive/20 transition-all duration-300 group"
            >
              <div className="mt-1 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground leading-relaxed font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-border shadow-soft rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            Если узнаешь себя хотя бы в двух пунктах, то тебе не нужна дисциплина планирования. Тебе нужна <span className="gradient-text font-bold">гибкость выбора</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
