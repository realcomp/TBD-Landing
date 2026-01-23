import { Target, BatteryLow, ZapOff, Shuffle } from "lucide-react";

export function TargetAudience() {
    const points = [
        {
            text: "Тем, кто устал планировать день и чувствовать провал к вечеру",
            icon: <BatteryLow className="h-6 w-6" />,
        },
        {
            text: "Тем, кто делает две задачи из пяти запланированных и демотивируется",
            icon: <ZapOff className="h-6 w-6" />,
        },
        {
            text: "Тем, у кого реальность постоянно ломает планы",
            icon: <Shuffle className="h-6 w-6" />,
        },
        {
            text: "Тем, кто хочет гибкости выбора вместо жесткого расписания",
            icon: <Target className="h-6 w-6" />,
        },
    ];

    return (
        <section id="target" className="bg-muted/30 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Кому это действительно нужно
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Если вы чувствуете, что классические методы планирования не работают для вашего ритма жизни
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {points.map((point, idx) => (
                        <div
                            key={idx}
                            className="group flex gap-5 items-start p-8 rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                {point.icon}
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-foreground pt-1">
                                {point.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
