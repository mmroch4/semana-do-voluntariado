import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").home.meta, { locale: "pt", pageKey: "home" });

export default function Page() {
  return <HomePage locale="pt" />;
}
