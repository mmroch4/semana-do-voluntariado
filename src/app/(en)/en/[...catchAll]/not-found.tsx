import { getDictionary } from "@/lib/content/dictionaries";
import { routes } from "@/lib/i18n/routes";
import { NotFoundView } from "@/components/pages/NotFoundView";

/** English 404 boundary co-located with the /en catch-all. */
export default function NotFound() {
  const dict = getDictionary("en");
  return <NotFoundView content={dict.notFound} homeHref={routes.en.home} />;
}
