import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "⌂" },
  { href: "/competitors", label: "Competitors", icon: "◎" },
  { href: "/reports", label: "Reports", icon: "▤" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-60 shrink-0 border-r border-white/[0.06] bg-[#090b12] p-4 md:block">
      <div className="px-2 py-2">
        <Logo />
      </div>
      <nav className="mt-8 space-y-1" aria-label="Application navigation">
        {links.map((link) => (
          <Link
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
            href={link.href}
            key={link.href}
          >
            <span className="w-4 text-center text-blue-300">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10 rounded-xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
          Creator plan
        </p>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          12 of 50 tracked channels used this month.
        </p>
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07090f] md:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <header className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 md:hidden">
          <Logo />
          <nav className="flex gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                className="rounded-lg px-2 py-1.5 text-xs text-slate-400 hover:bg-white/[0.06] hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label.slice(0, 4)}
              </Link>
            ))}
          </nav>
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
      <div>
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
