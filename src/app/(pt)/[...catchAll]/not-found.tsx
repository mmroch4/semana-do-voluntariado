import { getDictionary } from "@/lib/content/dictionaries";
import { routes } from "@/lib/i18n/routes";
import { NotFoundView } from "@/components/pages/NotFoundView";

/** Portuguese 404 boundary co-located with the root catch-all. */
export default function NotFound() {
  const dict = getDictionary("pt");
  return <NotFoundView content={dict.notFound} homeHref={routes.pt.home} />;
}
