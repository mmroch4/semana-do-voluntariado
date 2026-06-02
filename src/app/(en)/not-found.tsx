import { getDictionary } from "@/lib/content/dictionaries";
import { routes } from "@/lib/i18n/routes";
import { NotFoundView } from "@/components/pages/NotFoundView";

/**
 * 404 for the English site. Wrapped by the `(en)` root layout, so it inherits
 * `<html lang="en">`.
 */
export default function NotFound() {
  const dict = getDictionary("en");
  return <NotFoundView content={dict.notFound} homeHref={routes.en.home} />;
}
