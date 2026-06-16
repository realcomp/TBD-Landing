import { DEFAULT_LANGUAGE, RTL_LANGUAGES, SUPPORTED_LANGUAGES } from "./constants";
import type { Direction, LanguageCode, LanguageDefinition } from "./types";

export function isSupportedLanguage(code: unknown): code is LanguageCode {
  return SUPPORTED_LANGUAGES.some((l) => l.code === code);
}

export function getDirection(lang: LanguageCode): Direction {
  return RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr";
}

export function getActiveLanguages(): readonly LanguageDefinition[] {
  return SUPPORTED_LANGUAGES.filter((l) => l.isActive);
}

export function detectLanguage(): LanguageCode {
  const stored = localStorage.getItem("lang");
  if (isSupportedLanguage(stored)) return stored;

  const browser = navigator.language.slice(0, 2);
  if (isSupportedLanguage(browser)) return browser;

  return DEFAULT_LANGUAGE;
}

export function persistLanguage(code: LanguageCode): void {
  localStorage.setItem("lang", code);
}
