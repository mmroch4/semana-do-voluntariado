import { OrganizationPage } from "@/components/pages/OrganizationPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").organization.meta, { locale: "pt", pageKey: "organization" });

export default function Page() {
  return <OrganizationPage locale="pt" />;
}
