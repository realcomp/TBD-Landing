import {
    Zap,
    Target,
    CheckCircle,
    Clock,
    Download,
    Calendar,
} from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Мастер разбора входящих",
            description:
                "Быстро разберешь накопившееся и разложишь по контекстам и дедлайнам без стресса.",
            icon: <Zap className="h-6 w-6" />,
        },
        {
            title: "Списки по контекстам",
            description:
                "Переключайся между контекстами: дома, в офисе, с ноутбуком - видишь только нужные.",
            icon: <Target className="h-6 w-6" />,
        },
        {
            title: "Выбор вместо плана",
            description:
                "Не план, а список готовых действий. Открыл контекст и делаешь то, что можешь.",
            icon: <CheckCircle className="h-6 w-6" />,
        },
        {
            title: "Контроль реальных дедлайнов",
            description:
                "Дедлайны отдельно от потока. Видишь, что важно, а что можно отложить.",
            icon: <Clock className="h-6 w-6" />,
        },
        {
            title: "Мастер выгрузки задач из головы",
            description:
                "Все, что крутится в голове, выгружаешь за минуту. Голова становится легче.",
            icon: <Download className="h-6 w-6" />,
        },
        {
            title: "Еженедельный обзор",
            description:
                "Раз в неделю видишь, что сделал, что отложил и планируешь неделю вперед.",
            icon: <Calendar className="h-6 w-6" />,
        },
    ];

    return (
        <section id="features" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-12">Возможности</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
