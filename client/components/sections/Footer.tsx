export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; 2024 DTG Studio. Все права защищены.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition">
                            Политика конфиденциальности
                        </a>
                        <p>hello@dtg.studio</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
