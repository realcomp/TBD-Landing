import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function Access() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <section id="access" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                        Ранний доступ без риска
                    </h2>

                    {/* Benefits */}
                    <div className="max-w-2xl mb-10">
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Приглашение в бета для первых пользователей
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Твой голос повлияет на разработку
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    Разбор вашего завала задач с основателем
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">
                                    2 месяца бесплатного использования
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Email Form */}
                    <div className="w-full max-w-md">
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            />
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                            >
                                Вступить в лист ожидания
                            </button>
                        </form>

                        {subscribed && (
                            <p className="text-center text-sm text-primary mt-3 font-medium">
                                Спасибо! Проверь почту.
                            </p>
                        )}

                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Никакого спама. Только приглашение в бета-доступ.
                        </p>
                    </div>

                    {/* CTA Text */}
                    <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl">
                        Ранний доступ в закрытый запуск и 2 месяца бесплатного
                        использования для первых 100 пользователей.
                    </p>
                </div>
            </div>
        </section>
    );
}
