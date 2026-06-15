import { Shield, Check, Info } from "lucide-react";

const Pricing = () => {
    return (
        <section className="py-24 px-4 lg:px-8 bg-background">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Сколько это стоит?
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16 items-start">
                    {/* Monthly Plan */}
                    <div className="p-8 bg-card border border-border rounded-3xl text-center hover:shadow-soft transition-shadow">
                        <p className="text-muted-foreground mb-4 font-medium">Помесячно</p>
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                            <span className="text-4xl font-bold text-foreground">900</span>
                            <span className="text-xl text-muted-foreground">₽/мес</span>
                        </div>
                    </div>

                    {/* Yearly Plan */}
                    <div className="p-8 bg-card border-2 border-primary/20 rounded-3xl text-center relative shadow-soft scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                            Выгодно
                        </div>
                        <p className="text-muted-foreground mb-4 font-medium">За весь год</p>
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                            <span className="text-4xl font-bold text-foreground">9 900</span>
                            <span className="text-xl text-muted-foreground">₽</span>
                        </div>
                        <p className="text-sm font-semibold text-primary mt-2">~825 ₽/мес</p>
                    </div>

                    {/* Early Birds */}
                    <div className="p-8 bg-gradient-to-b from-card to-accent/20 border border-border rounded-3xl text-center hover:shadow-soft transition-shadow">
                        <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-4">
                            Early Birds
                        </div>
                        <p className="text-muted-foreground mb-4 font-medium">Бесплатно</p>
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                            <span className="text-4xl font-bold text-foreground">0</span>
                            <span className="text-xl text-muted-foreground">₽/мес</span>
                        </div>
                        <p className="text-sm text-foreground/70 mt-2">на первые полгода</p>
                    </div>
                </div>

                {/* Guarantee Block */}
                <div className="p-8 bg-card border border-border rounded-3xl max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-2xl text-foreground">Честно:</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ul className="space-y-4">
                            {[
                                "За первые 10 дней после оплаты ты смотришь и решаешь, подходит ли это тебе.",
                                "Если не подошло - вернем 100 % денег.",
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground/80">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-secondary/30 rounded-2xl p-6 text-sm text-muted-foreground">
                            <div className="flex gap-2 mb-2 text-foreground font-semibold">
                                <Info className="w-4 h-4 mt-0.5" />
                                Это система гибкого выбора, а не строгий планировщик
                            </div>
                            <p className="leading-relaxed">
                                Если у тебя 50+ задач в голове и мессенджерах - за 2 дня обработаешь через мастер и получишь структурированный список для выбора. <br />
                                Если тебе нужен жесткий план на каждый день - это не твое. Система не планирует за тебя. Она дает тебе выбор из готовых действий по текущей ситуации.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
