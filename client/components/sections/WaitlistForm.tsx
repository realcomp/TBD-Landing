import { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/lib/i18n/client";

export function WaitlistForm() {
    const { t, lang } = useTranslation();
    const [email, setEmail] = useState("");
    const [policyAgree, setPolicyAgree] = useState(""); // Honeypot
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim().toLowerCase(),
                    policyAgree,
                    lang,
                }),
            });

            const data = await response.json();

            if (data.ok) {
                setIsSuccess(true);
                toast.success(t("waitlist.toast_success"));
                setEmail("");
            } else {
                toast.error(data.message || t("waitlist.toast_error_default"));
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error(t("waitlist.toast_error_network"));
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20 animate-in fade-in zoom-in duration-300">
                <h3 className="text-xl font-bold mb-2 text-primary">{t("waitlist.success_title")}</h3>
                <p className="text-muted-foreground">
                    {t("waitlist.success_sent_prefix")}{" "}
                    <strong>{email || "…"}</strong>.{" "}
                    {t("waitlist.success_sent_suffix")}
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field - hidden from users */}
                <div style={{ display: "none" }} aria-hidden="true">
                    <input
                        type="text"
                        name="policyAgree"
                        value={policyAgree}
                        onChange={(e) => setPolicyAgree(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className="relative group">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 w-full rounded-full border border-input bg-background/50 backdrop-blur-sm px-6 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent group-hover:border-primary/50"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {t("waitlist.submitting")}
                        </span>
                    ) : (
                        t("waitlist.submit")
                    )}
                </button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-4">
                {t("waitlist.no_spam")}
            </p>
        </div>
    );
}
