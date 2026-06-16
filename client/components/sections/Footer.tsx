import { useTranslation } from "@/lib/i18n/client";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>{t("footer.rights")}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition">
                            {t("footer.privacy")}
                        </a>
                        <p>hello@dtg.studio</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
