import { VolunteeringDayPage } from "@/components/pages/VolunteeringDayPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").volunteeringDay.meta);

export default function Page() {
  return <VolunteeringDayPage locale="en" />;
}
