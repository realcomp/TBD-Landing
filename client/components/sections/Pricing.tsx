import { useTranslation } from "@/lib/i18n/client";

export function Pricing() {
    const { t } = useTranslation();

    return (
        <section id="pricing" className="bg-background py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        {t("pricing.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t("pricing.subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Monthly */}
                    <div className="bg-card/50 border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden opacity-60">
                        <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            {t("pricing.soon")}
                        </div>
                        <span className="text-muted-foreground italic mb-6">{t("pricing.monthly.label")}</span>
                        <div className="flex items-baseline gap-1 mb-2 text-muted-foreground/50">
                            <span className="text-4xl font-bold">{t("pricing.monthly.amount")}</span>
                            <span className="text-xl">{t("pricing.monthly.unit")}</span>
                        </div>
                        <p className="text-xs text-muted-foreground/40 leading-tight">{t("pricing.monthly.desc")}</p>
                    </div>

                    {/* Yearly */}
                    <div className="bg-card/50 border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden opacity-60">
                        <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            {t("pricing.soon")}
                        </div>
                        <span className="text-muted-foreground italic mb-6">{t("pricing.yearly.label")}</span>
                        <div className="flex items-baseline gap-1 mb-2 text-muted-foreground/50">
                            <span className="text-4xl font-bold">{t("pricing.yearly.amount")}</span>
                            <span className="text-xl">{t("pricing.yearly.unit")}</span>
                        </div>
                        <p className="text-xs text-muted-foreground/40 leading-tight">{t("pricing.yearly.desc")}</p>
                    </div>

                    {/* Early Birds */}
                    <div className="bg-card border-2 border-primary rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg relative group">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            Early Birds
                        </div>
                        <span className="text-muted-foreground italic mb-6">{t("pricing.early.label")}</span>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-4xl font-bold text-primary">0</span>
                            <span className="text-xl text-primary/70">{t("pricing.early.currency")}</span>
                        </div>
                        <p className="text-sm text-primary font-medium mb-1">{t("pricing.early.period")}</p>
                        <p className="text-xs text-muted-foreground leading-tight">{t("pricing.early.desc")}</p>
                    </div>
                </div>

                {/* Final Disclaimer */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic opacity-80">
                        {t("pricing.disclaimer")}
                    </p>
                </div>
            </div>
        </section>
    );
}
