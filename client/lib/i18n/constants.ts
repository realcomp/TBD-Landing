import type { LanguageCode, LanguageDefinition } from "./types";

export const DEFAULT_LANGUAGE: LanguageCode = "ru";

export const SUPPORTED_LANGUAGES: readonly LanguageDefinition[] = [
  { code: "ru", name: "Русский", isActive: true, direction: "ltr" },
  { code: "en", name: "English", isActive: true, direction: "ltr" },
  { code: "he", name: "עברית",   isActive: true, direction: "rtl" },
] as const;

export const RTL_LANGUAGES: readonly LanguageCode[] = ["he"] as const;
