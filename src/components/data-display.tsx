import { Badge, Button, Card } from "@/components/ui";
import type {
  Competitor,
  ContentIdea,
  OutlierVideo,
  Report,
  Trend,
} from "@/lib/mock-data";
import { formatNumber } from "@/lib/utils";

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-2 text-xs text-emerald-300">{detail}</p>
    </Card>
  );
}

export function OutlierTable({
  videos,
  compact = false,
}: {
  videos: OutlierVideo[];
  compact?: boolean;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-white/[0.07] bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-5 py-4">Video Title</th>
              <th className="px-5 py-4">Channel</th>
              <th className="px-5 py-4">Channel Average</th>
              <th className="px-5 py-4">Video Views</th>
              <th className="px-5 py-4">Outlier Score</th>
              <th className="px-5 py-4">{compact ? "Uploaded" : "Signal"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {videos.map((video) => (
              <tr
                className="text-slate-300 transition hover:bg-white/[0.025]"
                key={video.title}
              >
                <td className="max-w-xs px-5 py-4 font-medium text-white">
                  {video.title}
                </td>
                <td className="px-5 py-4">{video.channel}</td>
                <td className="px-5 py-4">
                  {formatNumber(video.averageViews)}
                </td>
                <td className="px-5 py-4">{formatNumber(video.views)}</td>
                <td className="px-5 py-4 font-semibold text-emerald-300">
                  {video.score}x
                </td>
                <td className="px-5 py-4">
                  <Badge tone={compact ? "slate" : "blue"}>
                    {compact ? video.uploadDate : video.signal}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function CompetitorTable({ items }: { items: Competitor[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-white/[0.07] bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-5 py-4">Channel</th>
              <th className="px-5 py-4">Niche</th>
              <th className="px-5 py-4">Subscribers</th>
              <th className="px-5 py-4">Average Views</th>
              <th className="px-5 py-4">Latest Outlier</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {items.map((item) => (
              <tr key={item.channel}>
                <td className="px-5 py-4 font-medium text-white">
                  {item.channel}
                </td>
                <td className="px-5 py-4 text-slate-400">{item.niche}</td>
                <td className="px-5 py-4 text-slate-300">
                  {formatNumber(item.subscribers)}
                </td>
                <td className="px-5 py-4 text-slate-300">
                  {formatNumber(item.averageViews)}
                </td>
                <td className="px-5 py-4 font-semibold text-emerald-300">
                  {item.latestOutlier}
                </td>
                <td className="px-5 py-4">
                  <Badge tone={item.status === "Tracking" ? "green" : "slate"}>
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function ContentIdeaCard({
  idea,
  detailed = false,
}: {
  idea: ContentIdea;
  detailed?: boolean;
}) {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <Badge tone="violet">{idea.pattern}</Badge>
        <span className="text-sm font-semibold text-emerald-300">
          {idea.confidence}%
        </span>
      </div>
      <h3 className="mt-4 font-semibold leading-6 text-white">{idea.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
        {idea.reason}
      </p>
      {detailed && (
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-slate-500">
          <span>Difficulty</span>
          <span className="font-medium text-slate-300">{idea.difficulty}</span>
        </div>
      )}
    </Card>
  );
}

export function TrendCard({ trend }: { trend: Trend }) {
  return (
    <Card className="p-5">
      <div className="flex justify-between gap-3">
        <h3 className="font-semibold text-white">{trend.title}</h3>
        <Badge tone={trend.strength === "High" ? "green" : "blue"}>
          {trend.strength}
        </Badge>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {trend.description}
      </p>
    </Card>
  );
}

export function ReportCard({ report }: { report: Report }) {
  return (
    <Card className="p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
        {report.date}
      </p>
      <h3 className="mt-4 text-lg font-semibold text-white">{report.title}</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/[0.07] py-4">
        <div>
          <p className="text-xs text-slate-500">Outliers found</p>
          <p className="mt-1 font-semibold text-white">{report.outliers}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Top score</p>
          <p className="mt-1 font-semibold text-emerald-300">
            {report.topScore}x
          </p>
        </div>
      </div>
      <Button className="mt-5 w-full" href={report.href} variant="secondary">
        View Report
      </Button>
    </Card>
  );
}
