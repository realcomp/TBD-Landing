import { CheckCircle } from "lucide-react";

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
    return (
        <section id="hero" className="bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            Перестань планировать день и чувствовать провал к вечеру
                        </h1>
                        <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            <p className="mb-4">
                                Каждое утро составляешь план из пяти задач, к вечеру делаешь
                                только две и ощущаешь себя неудачником?
                            </p>
                            <p>
                                При помощи DTG Studio ты за пару часов прогоняешь весь завал
                                через "мастер разбора" и получаешь список готовых действий.
                                Утром ты больше не пишешь план, ты открываешь систему и
                                смотришь, что можно сделать прямо сейчас. Сделал хотя бы одну
                                задачу - уже прогресс. Не получилось сделать – не беда, планов
                                и не было.
                            </p>
                        </div>

                        {/* Benefits */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Список готовых действий вместо ежедневного планирования
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Реальные дедлайны отдельно, без красной свалки просроченного
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Гибкость выбора вместо чувства вины
                                </span>
                            </li>
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection("how")}
                                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                            >
                                Посмотреть как работает
                            </button>
                            <button
                                onClick={() => scrollToSection("access")}
                                className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition"
                            >
                                Вступить
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Screenshot */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-card p-3">
                            <a
                                href="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F45b44fb89cae42628acfa6de186eeebe?format=webp&width=1920"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets%2F8a054a64822644caab1530df05a2c194%2F45b44fb89cae42628acfa6de186eeebe?format=webp&width=800&height=1200"
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
