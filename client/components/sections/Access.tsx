import { CheckCircle } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";
import { useTranslation } from "@/lib/i18n/client";

export function Access() {
    const { t } = useTranslation();

    return (
        <section id="access" className="bg-background py-14 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                        {t("access.title")}
                    </h2>

                    {/* Benefits */}
                    <div className="max-w-2xl mb-10">
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("access.benefit1")}</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("access.benefit2")}</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("access.benefit3")}</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{t("access.benefit4")}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Email Form */}
                    <WaitlistForm />

                    <p className="mt-4 text-sm text-muted-foreground">
                        {t("access.already")}{" "}
                        <a href="/inbox" className="text-primary hover:underline font-medium">
                            {t("access.signin")}
                        </a>
                    </p>

                    {/* CTA Text */}
                    <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl">
                        {t("access.footnote")}
                    </p>
                </div>
            </div>
        </section>
    );
}
