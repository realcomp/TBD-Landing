import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import en from "./dictionaries/en";
import he from "./dictionaries/he";
import ru from "./dictionaries/ru";
import type { TranslationKey } from "./dictionaries/keys";
import type { Direction, LanguageCode } from "./types";
import { detectLanguage, getDirection, persistLanguage } from "./utils";

const DICTIONARIES = { ru, en, he } as const;

export interface LanguageContextValue {
  lang: LanguageCode;
  direction: Direction;
  t: (key: TranslationKey) => string;
  setLang: (code: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function translate(lang: LanguageCode, key: TranslationKey): string {
  const value = DICTIONARIES[lang][key];
  if (typeof value === "string") return value;
  if (import.meta.env.DEV) {
    throw new Error(`[i18n] Missing key "${key}" in "${lang}"`);
  }
  console.error(`[i18n] Missing key "${key}" in "${lang}"`);
  return key;
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<LanguageCode>(detectLanguage);

  const setLang = useCallback((code: LanguageCode) => {
    setLangState(code);
    persistLanguage(code);
  }, []);

  const t = useCallback((key: TranslationKey) => translate(lang, key), [lang]);

  // Sync <html lang> and <html dir> on every language change
  useEffect(() => {
    const dir = getDirection(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, direction: getDirection(lang), t, setLang }),
    [lang, t, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error("useTranslation must be used inside <LanguageProvider>");
  }
  return ctx;
}
