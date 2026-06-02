import { PageHeader } from "@/components/app-shell";
import { CompetitorTable } from "@/components/data-display";
import { Button, Card } from "@/components/ui";
import { competitors } from "@/lib/mock-data";
export const metadata = { title: "Competitors" };
const input =
  "mt-2 w-full rounded-xl border border-white/[0.1] bg-black/20 px-3 py-2.5 text-sm text-white placeholder:text-slate-600";
export default function Competitors() {
  return (
    <>
      <PageHeader
        title="Competitor Channels"
        subtitle="Track channels in your niche and detect unusually successful uploads."
      />
      <Card className="mb-8 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-white">Add competitor</h2>
            <p className="mt-1 text-sm text-slate-400">
              Queue a new channel for outlier tracking.
            </p>
          </div>
          <span className="text-xs text-slate-500">Mock form</span>
        </div>
        <form className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="text-xs font-medium text-slate-400">
            Channel name
            <input className={input} placeholder="Example: BlockForge" />
          </label>
          <label className="text-xs font-medium text-slate-400">
            YouTube URL
            <input
              className={input}
              placeholder="youtube.com/@channel"
              type="url"
            />
          </label>
          <label className="text-xs font-medium text-slate-400">
            Niche
            <select className={input} defaultValue="Minecraft">
              <option>Minecraft</option>
              <option>Roblox</option>
              <option>Tech Reviews</option>
            </select>
          </label>
          <label className="text-xs font-medium text-slate-400">
            Notes
            <input className={input} placeholder="Optional notes" />
          </label>
          <div className="md:col-span-2 xl:col-span-4">
            <Button type="submit">Add Channel</Button>
          </div>
        </form>
      </Card>
      <h2 className="mb-4 text-lg font-semibold text-white">
        Tracked channels
      </h2>
      <CompetitorTable items={competitors} />
    </>
  );
}
