import "@/app/globals.css";
import { htmlLang } from "@/lib/i18n/config";
import { fontVariables } from "@/lib/fonts";
import { buildRootMetadata } from "@/lib/seo";

/**
 * Root layout for the Portuguese (default) site, served from the URL root.
 * This is one of two root layouts — see `app/(en)/layout.tsx` — which is what
 * lets each locale set its own `<html lang>` while keeping PT prefix-free.
 */
export const metadata = buildRootMetadata("pt");

export default function PortugueseRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={htmlLang.pt} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
