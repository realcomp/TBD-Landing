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
            description: "разложит хаос по контекстам и датам",
            icon: <Zap className="h-6 w-6" />,
        },
        {
            title: "Контексты",
            description: "видишь только то, что можно сделать здесь и сейчас",
            icon: <Target className="h-6 w-6" />,
        },
        {
            title: "Дедлайны отдельно",
            description: "важное видно, остальное не давит",
            icon: <Clock className="h-6 w-6" />,
        },
        {
            title: "Выбор вместо плана",
            description: "меньше вины, больше действия",
            icon: <CheckCircle className="h-6 w-6" />,
        },
        {
            title: "Выгрузка из головы",
            description: "голова становится легче",
            icon: <Download className="h-6 w-6" />,
        },
        {
            title: "Еженедельный обзор",
            description: "держишь фокус без \"планерки\"",
            icon: <Calendar className="h-6 w-6" />,
        },
    ];

    return (
        <section id="features" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                    Что дает DTG Studio
                </h2>

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
