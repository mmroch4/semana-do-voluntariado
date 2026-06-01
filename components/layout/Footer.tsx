import Link from "next/link";
import type { Chrome } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { footerNav, routes } from "@/lib/i18n/routes";

const labelClass =
  "m-0 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-accent";

/** Site footer: brand block, navigation, and contact details. */
export function Footer({ locale, chrome }: { locale: Locale; chrome: Chrome }) {
  const f = chrome.footer;
  return (
    <footer className="bg-surface-dark px-6 pb-10 pt-16 text-text-inverse md:px-16 md:pb-12 md:pt-20">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          <div className="flex flex-col gap-3.5 md:flex-1">
            <p className="m-0 font-display text-[1.25rem] font-medium text-text-inverse">
              {f.brandName}
            </p>
            <p className="text-[0.8125rem] tracking-[0.3px] text-surface-alt">{f.org}</p>
            <p className="text-xs leading-normal text-text-on-dark-muted">{f.tagline}</p>
          </div>

          <hr className="h-px border-0 bg-divider-dark md:hidden" aria-hidden="true" />

          <nav className="flex flex-col gap-3.5" aria-labelledby="footer-nav-label">
            <h2 id="footer-nav-label" className={labelClass}>
              {f.navLabel}
            </h2>
            <ul className="flex flex-col gap-3.5">
              {footerNav.map((page) => (
                <li key={page}>
                  <Link
                    href={routes[locale][page]}
                    className="text-[0.9375rem] text-text-inverse no-underline hover:text-accent"
                  >
                    {chrome.nav[page]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <hr className="h-px border-0 bg-divider-dark md:hidden" aria-hidden="true" />

          <div className="flex flex-col gap-3.5">
            <h2 className={labelClass}>{f.contactLabel}</h2>
            <address className="flex flex-col gap-2 not-italic">
              <a
                href={`mailto:${f.contactEmail}`}
                className="text-[0.9375rem] text-text-inverse no-underline hover:text-accent"
              >
                {f.contactEmail}
              </a>
              {f.contactLines.map((line) => (
                <span key={line} className="text-[0.875rem] text-text-on-dark-muted">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>

        <hr className="h-px border-0 bg-divider-dark" aria-hidden="true" />

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
          <p className="m-0 text-xs text-text-on-dark-muted">{f.copyright}</p>
          <Link
            href={routes[locale].privacy}
            className="text-xs text-text-on-dark-muted no-underline hover:text-text-inverse"
          >
            {f.privacyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
