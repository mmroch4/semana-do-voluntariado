"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import type { Chrome } from "@/lib/content/types";
import { locales, localeShort, type Locale } from "@/lib/i18n/config";
import { primaryNav, routes, type PageKey } from "@/lib/i18n/routes";

/**
 * Site header with an off-canvas mobile menu.
 *
 * The menu is a nav landmark, not a modal: no focus trap, no scroll lock. It
 * closes on Escape, on the close button, and when a link is chosen. Focus
 * moves to the first link on open and back to the toggle on close — matching
 * the legacy `menu.js` behavior.
 */
export function Header({
  locale,
  chrome,
  activePage,
  langSwitchHref,
}: {
  locale: Locale;
  chrome: Chrome;
  activePage?: PageKey;
  langSwitchHref: string;
}) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Move focus to the first link when opening; close on Escape.
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navLinkBase =
    "flex h-14 items-center border-b border-border-subtle px-2 text-[1.125rem] font-medium text-text-primary no-underline hover:text-text-accent md:h-auto md:border-0 md:p-0 md:text-[0.875rem] md:font-normal md:tracking-[0.5px] md:text-text-secondary md:hover:text-text-accent";

  return (
    <header className="sticky top-0 z-[100] border-b border-border-subtle bg-surface-warm">
      <Container className="flex h-18 items-center justify-between md:h-21">
        <Link
          href={routes[locale].home}
          className="font-display text-[1.125rem] font-medium leading-none tracking-[-0.3px] text-text-primary no-underline md:text-[1.375rem]"
        >
          {chrome.header.logo}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? chrome.header.closeMenu : chrome.header.openMenu}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-sm text-text-primary md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-0.5 w-5 rounded-[1px] bg-current" aria-hidden="true" />
          ))}
        </button>

        <nav
          id="main-nav"
          aria-label={chrome.header.logo}
          className={cn(
            "fixed inset-y-0 right-0 z-[200] flex w-[min(100vw,22.5rem)] flex-col bg-surface-warm p-6 transition-transform duration-200 ease-out",
            "md:static md:z-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:bg-transparent md:p-0 md:!visible",
            open ? "visible translate-x-0" : "invisible translate-x-full",
          )}
        >
          <div className="flex h-9 items-center justify-between md:hidden">
            <span className="font-display text-[1.125rem] font-medium tracking-[-0.3px] text-text-primary">
              {chrome.header.logo}
            </span>
            <button
              type="button"
              aria-label={chrome.header.closeMenu}
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="mt-12 flex flex-col md:mt-0 md:flex-row md:items-center md:gap-6 lg:gap-9">
            {primaryNav.map((page, index) => {
              const isActive = page === activePage;
              return (
                <li key={page} className="relative">
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={routes[locale][page]}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      navLinkBase,
                      isActive && "md:font-semibold md:!text-text-accent",
                    )}
                  >
                    {chrome.nav[page]}
                  </Link>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-2 left-0 right-0 hidden h-0.5 rounded-[1px] bg-text-accent md:block"
                    />
                  )}
                </li>
              );
            })}

            <li className="mt-4 md:ml-2 md:mt-0">
              {/* Two equal-sized square badges, PT then EN. The current locale
                  is distinguished only by its filled background; the other is a
                  plain anchor — a full document load is what we want when
                  crossing between root layouts. */}
              <div role="group" aria-label="Idioma / Language" className="inline-flex items-center gap-1.5">
                {locales.map((l) => {
                  const squareBase =
                    "inline-flex h-8 w-8 items-center justify-center rounded-sm text-[0.6875rem] font-semibold tracking-wide";
                  return l === locale ? (
                    <span
                      key={l}
                      aria-current="true"
                      className={cn(squareBase, "bg-accent text-accent-text")}
                    >
                      {localeShort[l]}
                    </span>
                  ) : (
                    <a
                      key={l}
                      href={langSwitchHref}
                      aria-label={chrome.langSwitchLabel}
                      title={chrome.langSwitchLabel}
                      className={cn(
                        squareBase,
                        "text-text-secondary no-underline hover:text-text-accent",
                      )}
                    >
                      {localeShort[l]}
                    </a>
                  );
                })}
              </div>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
