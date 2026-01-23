import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { WaitlistForm } from "./WaitlistForm";

export function Access() {

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
                    <WaitlistForm />

                    <p className="mt-4 text-sm text-muted-foreground">
                        Уже есть доступ?{" "}
                        <Link to="/inbox" className="text-primary hover:underline font-medium">
                            Войти в приложение
                        </Link>
                    </p>

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
