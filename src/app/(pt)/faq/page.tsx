import { FaqPage } from "@/components/pages/FaqPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").faq.meta, { locale: "pt", pageKey: "faq" });

export default function Page() {
  return <FaqPage locale="pt" />;
}
