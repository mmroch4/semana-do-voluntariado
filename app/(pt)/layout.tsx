import "@/app/globals.css";
import type { Metadata } from "next";
import { htmlLang } from "@/lib/i18n/config";

/**
 * Root layout for the Portuguese (default) site, served from the URL root.
 * This is one of two root layouts — see `app/(en)/layout.tsx` — which is what
 * lets each locale set its own `<html lang>` while keeping PT prefix-free.
 */
export const metadata: Metadata = {
  title: "Semana Solidária U.Porto",
  description:
    "Semana da Cidadania, Voluntariado e Responsabilidade Social da Universidade do Porto. 21 a 26 de setembro de 2026.",
};

export default function PortugueseRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={htmlLang.pt}>
      <body>{children}</body>
    </html>
  );
}
