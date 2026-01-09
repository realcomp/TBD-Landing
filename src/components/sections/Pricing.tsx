import { Shield, Check } from "lucide-react";

const Pricing = () => {
    return (
        <section className="py-24 px-4 lg:px-8 bg-background">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                    Почему это имеет смысл
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {/* Monthly Plan */}
                    <div className="p-6 md:p-8 bg-card border border-border rounded-2xl text-center">
                        <p className="text-muted-foreground mb-2 italic">Помесячно</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-foreground">900</span>
                            <span className="text-muted-foreground">₽/мес</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">с рассрочкой</p>
                    </div>

                    {/* Yearly Plan */}
                    <div className="p-6 md:p-8 bg-card border border-border rounded-2xl text-center">
                        <p className="text-muted-foreground mb-2 italic">За весь год</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-foreground">9 900</span>
                            <span className="text-muted-foreground">₽</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">~825 ₽/мес</p>
                    </div>

                    {/* Early Birds */}
                    <div className="p-6 md:p-8 bg-primary/5 border-2 border-primary rounded-2xl text-center relative">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full whitespace-nowrap">
                            Early Birds
                        </span>
                        <p className="text-muted-foreground mb-2 italic">Бесплатно</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-foreground">0</span>
                            <span className="text-muted-foreground">₽/мес</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">на первые полгода</p>
                    </div>
                </div>

                {/* Guarantee Block */}
                <div className="p-6 bg-card border border-border rounded-2xl max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-primary" />
                        <h3 className="font-semibold text-lg text-foreground">Честно:</h3>
                    </div>
                    <ul className="space-y-3">
                        {[
                            "За первые 10 дней после оплаты ты смотришь и решаешь, подходит ли это тебе",
                            "Если не подошло — вернем 100% денег",
                            "Это просто доступ к приложению, которое помогает быть эффективным",
                            "Никаких уровней, никаких ограничений — всё включено",
                        ].map((text, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mt-8 text-center text-muted-foreground text-sm max-w-xl mx-auto">
                    Это не обещание, что жизнь изменится. Это инструмент. Если у тебя есть хотя бы 50 дел в голове — система их разберет. Что дальше делать с ними — это твое решение. Но голова будет чистой.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
