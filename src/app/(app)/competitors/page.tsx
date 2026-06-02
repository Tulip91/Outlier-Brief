import { PageHeader } from "@/components/app-shell";
import { CompetitorTable } from "@/components/data-display";
import { CompetitorForm } from "@/components/interactive";
import { competitors } from "@/lib/mock-data";

export const metadata = { title: "Competitors" };

export default function Competitors() {
  return (
    <>
      <PageHeader
        title="Competitor Channels"
        subtitle="Track channels in your niche and detect unusually successful uploads."
      />
      <CompetitorForm />
      <h2 className="mb-4 text-lg font-semibold text-white">
        Tracked channels
      </h2>
      <CompetitorTable items={competitors} />
    </>
  );
}
