import { ShieldCheck, Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="bg-background py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                    Сколько это стоит?
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Monthly */}
                    <div className="bg-card/50 border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden opacity-60">
                        <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            Скоро
                        </div>
                        <span className="text-muted-foreground/70 italic mb-6">Помесячно</span>
                        <div className="flex items-baseline gap-1 mb-2 text-muted-foreground/50">
                            <span className="text-4xl font-bold">900</span>
                            <span className="text-xl">₽/мес</span>
                        </div>
                        <p className="text-sm text-muted-foreground/40">с рассрочкой</p>
                    </div>

                    {/* Yearly */}
                    <div className="bg-card/50 border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden opacity-60">
                        <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            Скоро
                        </div>
                        <span className="text-muted-foreground/70 italic mb-6">За весь год</span>
                        <div className="flex items-baseline gap-1 mb-2 text-muted-foreground/50">
                            <span className="text-4xl font-bold">9 900</span>
                            <span className="text-xl">₽</span>
                        </div>
                        <p className="text-sm text-muted-foreground/40">~825 ₽/мес</p>
                    </div>

                    {/* Early Birds */}
                    <div className="bg-card border-2 border-primary rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg relative group">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            Early Birds
                        </div>
                        <span className="text-muted-foreground italic mb-6">Бесплатно</span>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-4xl font-bold text-primary">0</span>
                            <span className="text-xl text-muted-foreground text-primary/70">₽/мес</span>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">на 2 месяца</p>
                    </div>
                </div>

                {/* Honestly Block */}
                <div className="max-w-4xl mx-auto bg-card border border-border rounded-[2.5rem] p-8 sm:p-12 transition-all duration-300 hover:shadow-lg hover:border-primary/20 group mb-12">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="flex-shrink-0 p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <ShieldCheck className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold">Честно:</h3>
                    </div>

                    <ul className="space-y-4">
                        {[
                            "За первые 10 дней после оплаты ты смотришь и решаешь, подходит ли это тебе",
                            "Если не подошло - вернем 100% денег",
                            "Это просто доступ к приложению, которое помогает быть эффективным",
                            "Никаких уровней, никаких ограничений - всё включено",
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start">
                                <div className="mt-1 p-0.5 rounded-full bg-primary/20 text-primary shrink-0">
                                    <Check className="h-3.5 w-3.5" />
                                </div>
                                <p className="text-muted-foreground leading-snug">{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Final Disclaimer */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic opacity-80">
                        Это не обещание, что жизнь изменится, это инструмент. Если у тебя есть хотя бы 50 дел в голове, ты сможешь эффективно разобрать их с помощью системы. Что дальше делать с этим - это твое решение. Но голова будет чистой.
                    </p>
                </div>
            </div>
        </section>
    );
}
