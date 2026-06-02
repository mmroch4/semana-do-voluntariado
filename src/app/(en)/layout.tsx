import "@/app/globals.css";
import { htmlLang } from "@/lib/i18n/config";
import { fontVariables } from "@/lib/fonts";
import { buildRootMetadata } from "@/lib/seo";

/**
 * Root layout for the English site (served under `/en`). The second of two
 * root layouts; it sets `<html lang="en">` for the entire `/en` subtree.
 */
export const metadata = buildRootMetadata("en");

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={htmlLang.en} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
