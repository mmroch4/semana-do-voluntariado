import { OrganizationPage } from "@/components/pages/OrganizationPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").organization.meta, { locale: "en", pageKey: "organization" });

export default function Page() {
  return <OrganizationPage locale="en" />;
}
