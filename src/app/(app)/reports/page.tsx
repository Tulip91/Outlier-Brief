import { PageHeader } from "@/components/app-shell";
import { ReportCard } from "@/components/data-display";
import { reports } from "@/lib/mock-data";
export const metadata = { title: "Reports" };
export default function Reports() {
  return (
    <>
      <PageHeader
        title="Reports"
        subtitle="Browse generated outlier briefs for your niches."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => (
          <ReportCard key={report.title} report={report} />
        ))}
      </section>
    </>
  );
}
