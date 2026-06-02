import { LocationPage } from "@/components/pages/LocationPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").location.meta, { locale: "pt", pageKey: "location" });

export default function Page() {
  return <LocationPage locale="pt" />;
}
