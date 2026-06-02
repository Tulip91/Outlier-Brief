import { PageHeader } from "@/components/app-shell";
import {
  ContentIdeaCard,
  OutlierTable,
  TrendCard,
} from "@/components/data-display";
import { Badge, Button, Card } from "@/components/ui";
import { contentIdeas, outliers, trends } from "@/lib/mock-data";
export const metadata = { title: "Minecraft Niche Analysis" };
const analysis = [
  {
    title: "Winning Title Patterns",
    items: [
      "I Survived 100 Days…",
      "Minecraft But…",
      "I Built X in Y…",
      "I Tried X Without Y…",
    ],
  },
  {
    title: "Common Content Mechanics",
    items: [
      "survival restrictions",
      "forced limitations",
      "AI or villager control",
      "dangerous biome challenges",
      "base building under pressure",
    ],
  },
  {
    title: "Thumbnail Signals",
    items: [
      "one obvious central object",
      "danger indicator",
      "large expressive character",
      "clear contrast",
      "minimal text",
    ],
  },
];
export default function SampleReport() {
  return (
    <>
      <PageHeader
        title="Minecraft Niche Analysis"
        subtitle="Generated June 2026 from 12 tracked competitor channels."
        actions={
          <>
            <Button variant="secondary">Export PDF</Button>
            <Button>Save Ideas</Button>
          </>
        }
      />
      <Card className="border-blue-400/20 bg-gradient-to-br from-blue-400/[0.09] to-violet-400/[0.04] p-6 md:p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
          Executive summary
        </p>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
          This week&apos;s strongest outliers are challenge-based Minecraft
          survival videos with clear restrictions, high-stakes titles, and
          thumbnails that communicate danger or limitation immediately.
        </p>
      </Card>
      <section className="mt-9">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Top Outliers</h2>
            <p className="mt-1 text-sm text-slate-500">
              The strongest unusual performers from tracked channels.
            </p>
          </div>
          <Badge tone="green">12 found</Badge>
        </div>
        <OutlierTable videos={outliers.slice(0, 4)} />
      </section>
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Pattern Analysis</h2>
        <p className="mt-1 text-sm text-slate-500">
          Repeatable signals behind this week&apos;s winners.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {analysis.map((group) => (
            <Card className="p-5" key={group.title}>
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span className="text-blue-300">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">
          Content Opportunities
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          New angles grounded in proven signals, ready for creative development.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contentIdeas.map((idea) => (
            <ContentIdeaCard detailed idea={idea} key={idea.title} />
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Emerging Trends</h2>
        <p className="mt-1 text-sm text-slate-500">
          Signals worth watching over the next few uploads.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {trends.map((trend) => (
            <TrendCard key={trend.title} trend={trend} />
          ))}
        </div>
      </section>
      <Card className="mt-10 overflow-hidden border-emerald-400/25 bg-emerald-400/[0.075]">
        <div className="grid lg:grid-cols-[1fr_180px]">
          <div className="p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Recommended next upload
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Minecraft But I Can Only Live Underground
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              This combines the strongest recurring signals: survival,
              restriction, underground setting, and clear curiosity gap. It is
              easy to understand from the title and thumbnail, and it connects
              directly to multiple recent outliers.
            </p>
          </div>
          <div className="grid place-items-center border-t border-emerald-400/15 bg-emerald-400/[0.06] p-7 text-center lg:border-l lg:border-t-0">
            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-200">
                Confidence
              </p>
              <p className="mt-2 text-5xl font-semibold text-white">89%</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
