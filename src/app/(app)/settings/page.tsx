import { PageHeader } from "@/components/app-shell";
import { ActionButton } from "@/components/interactive";
import { Card } from "@/components/ui";
export const metadata = { title: "Settings" };
const field =
  "mt-2 w-full rounded-xl border border-white/[0.1] bg-black/20 px-3 py-2.5 text-sm text-white";
function Toggle({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <label className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-3 text-sm text-slate-300 last:border-0">
      <span>{label}</span>
      <input
        className="size-4 accent-blue-400"
        defaultChecked={checked}
        type="checkbox"
      />
    </label>
  );
}
export default function Settings() {
  return (
    <>
      <PageHeader
        title="Settings"
        subtitle="Manage your creator profile and the briefs you receive."
      />
      <div className="grid gap-5 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-semibold text-white">Profile</h2>
          <div className="mt-5 grid gap-4">
            <label className="text-xs font-medium text-slate-400">
              Name
              <input className={field} defaultValue="Alex Creator" />
            </label>
            <label className="text-xs font-medium text-slate-400">
              Email
              <input
                className={field}
                defaultValue="alex@example.com"
                type="email"
              />
            </label>
            <label className="text-xs font-medium text-slate-400">
              Channel URL
              <input
                className={field}
                defaultValue="youtube.com/@alexcreates"
                type="url"
              />
            </label>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold text-white">Report Preferences</h2>
          <div className="mt-5 grid gap-4">
            <label className="text-xs font-medium text-slate-400">
              Report frequency
              <select className={field} defaultValue="Weekly">
                <option>Weekly</option>
                <option>Twice weekly</option>
                <option>Monthly</option>
              </select>
            </label>
            <label className="text-xs font-medium text-slate-400">
              Primary niche
              <select className={field} defaultValue="Minecraft">
                <option>Minecraft</option>
                <option>Roblox</option>
                <option>Tech Reviews</option>
              </select>
            </label>
            <label className="text-xs font-medium text-slate-400">
              Competitor count
              <input className={field} defaultValue="12" type="number" />
            </label>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold text-white">Notifications</h2>
          <div className="mt-3">
            <Toggle checked label="Weekly email brief" />
            <Toggle checked label="Breakout alerts" />
            <Toggle label="Trend alerts" />
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold text-white">Theme</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["Dark", "System", "Light"].map((theme, index) => (
              <label
                className="rounded-xl border border-white/[0.09] bg-white/[0.03] p-4 text-sm text-slate-300"
                key={theme}
              >
                <input
                  className="mr-2 accent-blue-400"
                  defaultChecked={index === 0}
                  name="theme"
                  type="radio"
                />
                {theme}
              </label>
            ))}
          </div>
        </Card>
      </div>
      <ActionButton className="mt-6" done="Settings updated" variant="primary">
        Save Settings
      </ActionButton>
    </>
  );
}
