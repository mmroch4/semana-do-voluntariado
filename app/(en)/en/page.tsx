import { HomePage } from "@/components/pages/HomePage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").home.meta);

export default function Page() {
  return <HomePage locale="en" />;
}
