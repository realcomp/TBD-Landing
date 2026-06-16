import { Frown, XCircle, Zap, Clock } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";
import type { TranslationKey } from "@/lib/i18n/dictionaries/keys";

export function PainSection() {
    const { t } = useTranslation();

    const pains: { textKey: TranslationKey; icon: React.ReactNode }[] = [
        { textKey: "pain.item1", icon: <Frown className="h-6 w-6" /> },
        { textKey: "pain.item2", icon: <XCircle className="h-6 w-6" /> },
        { textKey: "pain.item3", icon: <Zap className="h-6 w-6" /> },
        { textKey: "pain.item4", icon: <Clock className="h-6 w-6" /> },
    ];

    return (
        <section id="pain" className="bg-background py-14 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {t("pain.title")}
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {pains.map((pain, idx) => (
                        <div
                            key={idx}
                            className="group bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    {pain.icon}
                                </div>
                                <p className="text-lg font-medium leading-relaxed text-foreground pt-1">
                                    {t(pain.textKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl text-muted-foreground font-medium italic">
                        {t("pain.footer")}
                    </p>
                </div>
            </div>
        </section>
    );
}
