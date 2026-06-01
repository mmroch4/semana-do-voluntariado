import { OrganizationPage } from "@/components/pages/OrganizationPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").organization.meta);

export default function Page() {
  return <OrganizationPage locale="pt" />;
}
