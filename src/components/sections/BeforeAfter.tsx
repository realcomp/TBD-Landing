import { ArrowRight, X, Check } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-24 px-4 lg:px-8 bg-card">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как меняется твой день
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Before */}
          <div className="bg-secondary/50 rounded-2xl p-8 border border-destructive/20 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-destructive uppercase tracking-wider mb-2">До</p>
                <h3 className="text-xl font-bold text-foreground">Хаос и тревога</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Просыпаешься - мессенджеры, почта, уведомления. Кто-то что-то просит. Ты реагируешь, тушишь пожары.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                В конце дня чувствуешь, что снова потратил время на мелкие вопросы, не сделал ничего из того, что реально хотел, а часть задач уже просрочил.
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  Плюс остаётся неприятное ощущение, что мог забыть что-то важное.
                </p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-accent/30 rounded-2xl p-8 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">После</p>
                <h3 className="text-xl font-bold text-foreground">Ясность и прогресс</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Открываешь один экран "на ближайшее время" - там 5-7 реальных дел. Остальное разложено по полкам и не шумит.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Вечером ты видишь фактический прогресс и понимаешь, что завтра делать дальше.
              </p>

              <div className="pt-4 border-t border-border flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  Спокойная голова и управляемая жизнь
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
