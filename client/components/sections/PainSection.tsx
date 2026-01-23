export function PainSection() {
    return (
        <section id="pain" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                        Узнаешь себя?
                    </h2>
                    <ul className="space-y-4 mb-6">
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-foreground">
                                Составил план на день из пяти задач, к вечеру сделал две,
                                чувствуешь вину
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-foreground">
                                Todoist показывает 12 просроченных, и ты избегаешь его
                                открывать
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-foreground">
                                Реальность ломает планы: звонок, срочная задача, встреча
                                затянулась
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="text-foreground">
                                Пробовал time blocking, и календарь развалился через час
                            </span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium">
                        Если узнаешь себя хотя бы в двух пунктах - тебе нужна гибкость
                        выбора.
                    </p>
                </div>
            </div>
        </section>
    );
}
