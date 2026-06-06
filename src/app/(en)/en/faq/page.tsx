import { FaqPage } from "@/components/pages/FaqPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").faq.meta, { locale: "en", pageKey: "faq" });

export default function Page() {
  return <FaqPage locale="en" />;
}
