import type { Locale } from "./config";

/**
 * Canonical page identifiers, decoupled from their localized URLs.
 * Components reference pages by key (e.g. `"program"`); the URL is resolved
 * per-locale through {@link routes}. This is what lets the language switcher
 * jump between equivalent pages and keeps nav links DRY.
 */
export type PageKey =
  | "home"
  | "program"
  | "location"
  | "organization"
  | "volunteeringDay"
  | "faq"
  | "privacy";

/** Localized URL for every page. PT lives at the root, EN under `/en`. */
export const routes: Record<Locale, Record<PageKey, string>> = {
  pt: {
    home: "/",
    program: "/programa",
    location: "/localizacao",
    organization: "/organizacao",
    volunteeringDay: "/dia-voluntariado",
    faq: "/faq",
    privacy: "/privacidade",
  },
  en: {
    home: "/en",
    program: "/en/program",
    location: "/en/location",
    organization: "/en/organization",
    volunteeringDay: "/en/volunteering-day",
    faq: "/en/faq",
    privacy: "/en/privacy",
  },
};

/** Pages shown in the primary header navigation, in order. */
export const primaryNav: PageKey[] = [
  "program",
  "location",
  "organization",
  "volunteeringDay",
  "faq",
];

/** Pages shown in the footer navigation, in order. */
export const footerNav: PageKey[] = [
  "program",
  "location",
  "organization",
  "faq",
  "privacy",
];

/** The opposite locale — used by the language switcher. */
export const otherLocale: Record<Locale, Locale> = {
  pt: "en",
  en: "pt",
};
