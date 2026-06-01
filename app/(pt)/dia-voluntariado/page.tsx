import { VolunteeringDayPage } from "@/components/pages/VolunteeringDayPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("pt").volunteeringDay.meta);

export default function Page() {
  return <VolunteeringDayPage locale="pt" />;
}
