import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    activeSection: string;
}

export function Header({ scrollToSection, activeSection }: HeaderProps) {
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
                        <span className="font-semibold text-lg hidden sm:inline">
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
                            Как работает
                        </button>
                        <button
                            onClick={() => scrollToSection("features")}
                            className={`text-sm font-medium transition-colors ${activeSection === "features"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            Возможности
                        </button>
                        <button
                            onClick={() => scrollToSection("access")}
                            className={`text-sm font-medium transition-colors ${activeSection === "access"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-foreground/70 hover:text-foreground"
                                }`}
                        >
                            Доступ
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/inbox"
                            className="text-sm text-muted-foreground hover:text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
                        >
                            Войти
                        </Link>
                        <button
                            onClick={() => scrollToSection("access")}
                            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
                        >
                            Вступить
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
