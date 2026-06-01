import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").privacy.meta);

export default function Page() {
  return <PrivacyPage locale="pt" />;
}
