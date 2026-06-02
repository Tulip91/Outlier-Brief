import type { ReactNode } from "react";
import { DesktopNav, MobileNav } from "@/components/app-nav";
import { Logo } from "@/components/ui";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 border-r border-white/[0.06] bg-[#090b12]/95 p-4 backdrop-blur-xl md:block">
      <div className="px-2 py-2">
        <Logo />
      </div>
      <DesktopNav />
      <div className="mt-10 rounded-xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
            Creator plan
          </p>
          <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          12 of 50 tracked channels used this month.
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-[24%] rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
        </div>
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07090f] md:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-[#07090f]/85 px-4 py-3 backdrop-blur-xl md:hidden">
          <Logo />
          <MobileNav />
        </header>
        <main className="mx-auto max-w-7xl p-5 md:p-8 lg:p-10">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
      <div data-reveal>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
          Outlier Brief
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          {subtitle}
        </p>
      </div>
      {actions && <div className="flex gap-3">{actions}</div>}
    </div>
  );
}
