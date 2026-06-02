import { PageHeader } from "@/components/app-shell";
import {
  ContentIdeaCard,
  OutlierTable,
  StatCard,
} from "@/components/data-display";
import { Card } from "@/components/ui";
import { contentIdeas, outliers } from "@/lib/mock-data";
export const metadata = { title: "Dashboard" };
export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Your weekly snapshot of competitor outliers and content opportunities."
      />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Channels tracked" value="12" detail="+2 this month" />
        <StatCard label="Outliers found" value="37" detail="+11 this week" />
        <StatCard
          label="Average outlier score"
          value="8.4x"
          detail="+18% vs last week"
        />
        <StatCard
          label="New ideas generated"
          value="24"
          detail="10 high confidence"
        />
      </section>
      <section className="mt-9">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Recent Outliers
        </h2>
        <OutlierTable compact videos={outliers} />
      </section>
      <section className="mt-9">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Top Opportunities
        </h2>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {contentIdeas.slice(0, 4).map((idea) => (
            <ContentIdeaCard idea={idea} key={idea.title} />
          ))}
        </div>
      </section>
      <Card className="mt-9 border-blue-400/20 bg-blue-400/[0.06] p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
          Weekly summary
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
          Restriction-based Minecraft challenges dominated this week&apos;s
          breakouts. Underground survival and villager-control mechanics are
          gaining momentum, while clear one-rule premises continue to outperform
          broad let&apos;s-play concepts. Prioritise an instantly readable
          restriction for your next upload.
        </p>
      </Card>
    </>
  );
}
