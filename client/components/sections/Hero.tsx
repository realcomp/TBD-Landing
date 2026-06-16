import { CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
    const { t } = useTranslation();

    return (
        <section id="hero" className="bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                            {t("hero.title")}
                        </h1>
                        <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            <p className="mb-4">{t("hero.desc1")}</p>
                            <p>{t("hero.desc2")}</p>
                        </div>

                        {/* Benefits */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("hero.benefit1")}</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("hero.benefit2")}</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("hero.benefit3")}</span>
                            </li>
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection("how")}
                                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                            >
                                {t("hero.cta_how")}
                            </button>
                            <button
                                onClick={() => scrollToSection("access")}
                                className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition"
                            >
                                {t("hero.cta_join")}
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
                                    width="800"
                                    height="1200"
                                    fetchPriority="high"
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
