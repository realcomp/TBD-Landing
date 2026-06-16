export type LanguageCode = "ru" | "en" | "he";
export type Direction = "ltr" | "rtl";

export interface LanguageDefinition {
  code: LanguageCode;
  name: string;
  isActive: boolean;
  direction: Direction;
}
