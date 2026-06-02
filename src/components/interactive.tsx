"use client";

import { useState } from "react";
import { Button, Card } from "@/components/ui";

export function ActionButton({
  children,
  done = "Saved",
  variant = "secondary",
  className = "",
}: {
  children: string;
  done?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const [complete, setComplete] = useState(false);
  return (
    <Button
      className={className}
      onClick={() => {
        setComplete(true);
        window.setTimeout(() => setComplete(false), 2200);
      }}
      variant={complete ? "primary" : variant}
    >
      {complete ? `Saved: ${done}` : children}
    </Button>
  );
}

const input =
  "mt-2 w-full rounded-xl border border-white/[0.1] bg-black/20 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 transition";

export function CompetitorForm() {
  const [added, setAdded] = useState(false);
  return (
    <Card className="mb-8 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold text-white">Add competitor</h2>
          <p className="mt-1 text-sm text-slate-400">
            Queue a new channel for outlier tracking.
          </p>
        </div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-slate-500">
          Mock workspace
        </span>
      </div>
      <form
        className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        onSubmit={(event) => {
          event.preventDefault();
          setAdded(true);
          event.currentTarget.reset();
          window.setTimeout(() => setAdded(false), 2800);
        }}
      >
        <label className="text-xs font-medium text-slate-400">
          Channel name
          <input className={input} placeholder="Example: BlockForge" required />
        </label>
        <label className="text-xs font-medium text-slate-400">
          YouTube URL
          <input
            className={input}
            placeholder="https://youtube.com/@channel"
            required
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
        <div className="flex items-center gap-4 md:col-span-2 xl:col-span-4">
          <Button type="submit">Add Channel</Button>
          <p aria-live="polite" className="text-sm text-emerald-300">
            {added ? "Channel queued for the next mock scan." : ""}
          </p>
        </div>
      </form>
    </Card>
  );
}
