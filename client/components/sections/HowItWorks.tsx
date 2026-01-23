import { MessageSquare, Zap, Target, CheckCircle } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            step: 1,
            title: 'Записал мысль во "Входящие" за 10 секунд',
            icon: <MessageSquare className="h-6 w-6" />,
        },
        {
            step: 2,
            title: "Разобрал накопившееся через мастер разбора",
            icon: <Zap className="h-6 w-6" />,
        },
        {
            step: 3,
            title: "Получил контекст и реальные дедлайны отдельно",
            icon: <Target className="h-6 w-6" />,
        },
        {
            step: 4,
            title:
                "Открыл нужный контекст и сделал одну задачу. Или две. Или, даже, пять. Сколько получилось.",
            icon: <CheckCircle className="h-6 w-6" />,
        },
    ];

    return (
        <section id="how" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-12">
                    Как это работает
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((item) => (
                            <div
                                key={item.step}
                                className="group bg-card border border-border rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                            >
                                <div className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1 text-xs font-semibold text-muted-foreground border border-border mb-6">
                                    Шаг {item.step}
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <p className="text-lg font-medium leading-relaxed pt-1">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Screenshot */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-3">
                            <a
                                href="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F7c803fd5f805469eb0b21099e8f21829?format=webp&width=1920"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F7c803fd5f805469eb0b21099e8f21829?format=webp&width=800&height=1200"
                                    alt="DTG Studio Product Screenshot"
                                    className="w-full rounded-xl object-cover"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
