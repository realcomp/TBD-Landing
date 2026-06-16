import { useRef, useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";
import { getActiveLanguages } from "@/lib/i18n/utils";
import type { LanguageCode } from "@/lib/i18n/types";

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    activeSection: string;
}

function LanguageSwitcher() {
    const { lang, setLang } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const languages = getActiveLanguages();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const select = (code: LanguageCode) => {
        setLang(code);
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition text-sm font-semibold"
            >
                <Globe className="h-4 w-4" />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div
                    role="listbox"
                    className="absolute top-full mt-1 end-0 min-w-[120px] bg-popover border border-border rounded-xl shadow-lg py-1 z-50"
                >
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            role="option"
                            aria-selected={l.code === lang}
                            onClick={() => select(l.code)}
                            className={`w-full text-start px-3 py-2 text-sm transition-colors ${
                                l.code === lang
                                    ? "text-primary font-semibold bg-primary/5"
                                    : "text-foreground hover:bg-muted/50"
                            }`}
                        >
                            {l.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export function Header({ scrollToSection, activeSection }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="https://dtg.sportomatics.com/logo.png"
                            alt="DTG Studio"
                            className="h-8 w-auto"
                        />
                        <span className="font-semibold text-lg">
                            DTG Studio
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("how")}
                            className={`text-sm font-medium transition-colors ${activeSection === "how"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            {t("nav.how")}
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className={`text-sm font-medium transition-colors ${activeSection === "features"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            {t("nav.features")}
                        </button>
                        <button
                            onClick={() => scrollToSection("access")}
                            className={`text-sm font-medium transition-colors ${activeSection === "access"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            {t("nav.access")}
                        </button>
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <a
                            href="/inbox"
                            className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                        >
                            {t("nav.signin")}
                        </a>
                        <button
                            onClick={() => scrollToSection("access")}
                            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                        >
                            {t("nav.join")}
                        </button>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}
