import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/content/types";
import { pt } from "./pt";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

/** Returns the full content dictionary for a locale. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
