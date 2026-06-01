import { ProgramPage } from "@/components/pages/ProgramPage";
import { getDictionary } from "@/lib/content/dictionaries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(getDictionary("en").program.meta);

export default function Page() {
  return <ProgramPage locale="en" />;
}
