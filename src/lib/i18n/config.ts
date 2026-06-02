/**
 * Locale configuration.
 *
 * Portuguese (European, pt-PT) is the default language and is served from the
 * URL root with no prefix. English is served under the `/en` prefix.
 */
export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** The `lang` attribute written onto `<html>` for each locale. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en",
};

/** Short uppercase code shown in the language badge. */
export const localeShort: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};
