import { Check } from "lucide-react";

export function Methodology() {
    const points = [
        "Ничего не держать в голове",
        "Разбирать входящее через решения, а не сортировку",
        "Отделять проекты от конкретных действий",
        "Делать регулярный короткий обзор",
    ];

    return (
        <section id="methodology" className="bg-background py-14 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            В основе сервиса методика <br />
                            <span className="text-primary italic">Getting Things Done (GTD)</span> <br />
                            но без религиозности
                        </h2>
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Это способ структурирования задач, который разработал Дэвид Аллен.
                                Он десятилетиями работал консультантом по личной эффективности.
                                Методике больше 30 лет практики, а книга стала базовой для людей,
                                уставших жить в режиме постоянного пожара.
                            </p>
                            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                                <p className="font-medium text-foreground italic">
                                    "Но тебе не нужно «изучать метод». Тебе нужен результат:
                                    чтобы входящие перестали давить и стало понятно, что делать дальше."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-card border border-border rounded-3xl shadow-card p-8 sm:p-10 relative overflow-hidden">
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

                            <ul className="space-y-6 relative z-10">
                                {points.map((point, idx) => (
                                    <li key={idx} className="flex gap-5 items-start text-foreground">
                                        <div className="mt-1 bg-primary/10 p-1.5 rounded-full flex-shrink-0">
                                            <Check className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="font-semibold text-lg leading-tight">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
