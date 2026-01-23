import { Frown, XCircle, Zap, Clock } from "lucide-react";

export function PainSection() {
    const pains = [
        {
            text: "Составил план на день из пяти задач, к вечеру сделал две, чувствуешь вину",
            icon: <Frown className="h-6 w-6" />,
        },
        {
            text: "Todoist показывает 12 просроченных, и ты избегаешь его открывать",
            icon: <XCircle className="h-6 w-6" />,
        },
        {
            text: "Реальность ломает планы: звонок, срочная задача, встреча затянулась",
            icon: <Zap className="h-6 w-6" />,
        },
        {
            text: "Пробовал time blocking, и календарь развалился через час",
            icon: <Clock className="h-6 w-6" />,
        },
    ];

    return (
        <section id="pain" className="bg-background py-14 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Узнаешь себя?
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {pains.map((pain, idx) => (
                        <div
                            key={idx}
                            className="group bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                        >
                            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                                {pain.icon}
                            </div>
                            <p className="text-lg font-medium leading-relaxed text-foreground">
                                {pain.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl text-muted-foreground font-medium italic">
                        Если узнаешь себя хотя бы в двух пунктах — тебе нужна гибкость выбора.
                    </p>
                </div>
            </div>
        </section>
    );
}
