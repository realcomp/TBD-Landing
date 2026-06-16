import { Zap, Target, CheckCircle, Clock, Download, Calendar } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";
import type { TranslationKey } from "@/lib/i18n/dictionaries/keys";

export function Features() {
    const { t } = useTranslation();

    const features: {
        titleKey: TranslationKey;
        descKey: TranslationKey;
        icon: React.ReactNode;
    }[] = [
        { titleKey: "features.f1.title", descKey: "features.f1.desc", icon: <Zap className="h-6 w-6" /> },
        { titleKey: "features.f2.title", descKey: "features.f2.desc", icon: <Target className="h-6 w-6" /> },
        { titleKey: "features.f3.title", descKey: "features.f3.desc", icon: <Clock className="h-6 w-6" /> },
        { titleKey: "features.f4.title", descKey: "features.f4.desc", icon: <CheckCircle className="h-6 w-6" /> },
        { titleKey: "features.f5.title", descKey: "features.f5.desc", icon: <Download className="h-6 w-6" /> },
        { titleKey: "features.f6.title", descKey: "features.f6.desc", icon: <Calendar className="h-6 w-6" /> },
    ];

    return (
        <section id="features" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                    {t("features.title")}
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="flex flex-row sm:flex-col gap-4 sm:gap-0 items-start">
                                <div className="flex-shrink-0 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 sm:mb-6">
                                    {feature.icon}
                                </div>
                                <div className="pt-1 sm:pt-0">
                                    <h3 className="text-xl font-bold mb-2 sm:mb-3">{t(feature.titleKey)}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t(feature.descKey)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
