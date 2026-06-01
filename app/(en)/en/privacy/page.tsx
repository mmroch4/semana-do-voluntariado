import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").privacy.meta);

export default function Page() {
  return <PrivacyPage locale="en" />;
}
