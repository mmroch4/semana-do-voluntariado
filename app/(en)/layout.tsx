import "@/app/globals.css";
import type { Metadata } from "next";
import { htmlLang } from "@/lib/i18n/config";

/**
 * Root layout for the English site (served under `/en`). The second of two
 * root layouts; it sets `<html lang="en">` for the entire `/en` subtree.
 */
export const metadata: Metadata = {
  title: "Semana Solidária U.Porto",
  description:
    "Week of Citizenship, Volunteering and Social Responsibility at the University of Porto. 21–26 September 2026.",
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={htmlLang.en}>
      <body>{children}</body>
    </html>
  );
}
