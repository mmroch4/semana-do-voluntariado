import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Dictionary } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { otherLocale, primaryNav, routes, type PageKey } from "@/lib/i18n/routes";

/**
 * Wraps a page's `<main>` content with the shared skip link, header and
 * footer. From `pageKey` it derives the active nav item and the cross-locale
 * link (same page, other language).
 */
export function SiteFrame({
  locale,
  dict,
  pageKey,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  pageKey: PageKey;
  children: React.ReactNode;
}) {
  const activePage = primaryNav.includes(pageKey) ? pageKey : undefined;
  const langSwitchHref = routes[otherLocale[locale]][pageKey];

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.chrome.skipToContent}
      </a>
      <Header
        locale={locale}
        chrome={dict.chrome}
        activePage={activePage}
        langSwitchHref={langSwitchHref}
      />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} chrome={dict.chrome} />
    </>
  );
}
