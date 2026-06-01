import { getDictionary } from "@/lib/content/dictionaries";
import { routes } from "@/lib/i18n/routes";
import { NotFoundView } from "@/components/pages/NotFoundView";

/**
 * 404 for the Portuguese site. Wrapped by the `(pt)` root layout, so it
 * inherits `<html lang="pt-PT">`. Also serves unmatched root-level URLs.
 */
export default function NotFound() {
  const dict = getDictionary("pt");
  return <NotFoundView content={dict.notFound} homeHref={routes.pt.home} />;
}
