import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { htmlLang, locales } from "@/lib/i18n/config";
import { routes, type PageKey } from "@/lib/i18n/routes";

/**
 * Sitemap generated straight from the i18n `routes` map, so it can never drift
 * out of sync with the actual pages. Each URL carries hreflang alternates
 * pointing at its counterpart in the other language.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.keys(routes.pt) as PageKey[];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: new URL(routes[locale][page], SITE_URL).toString(),
      changeFrequency: "weekly" as const,
      priority: page === "home" ? 1 : 0.8,
      alternates: {
        languages: {
          [htmlLang.pt]: new URL(routes.pt[page], SITE_URL).toString(),
          [htmlLang.en]: new URL(routes.en[page], SITE_URL).toString(),
        },
      },
    })),
  );
}
