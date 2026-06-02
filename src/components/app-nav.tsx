"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/competitors", label: "Competitors", icon: "competitors" },
  { href: "/reports", label: "Reports", icon: "reports" },
  { href: "/settings", label: "Settings", icon: "settings" },
] as const;

function NavIcon({ name }: { name: (typeof links)[number]["icon"] }) {
  const common = "size-4";
  if (name === "dashboard")
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M4 13h6V4H4v9Zm0 7h6v-4H4v4Zm10 0h6v-9h-6v9Zm0-16v4h6V4h-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  if (name === "competitors")
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="m17 7 3-3M4 20l3-3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  if (name === "reports")
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24">
        <path
          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 15v-3m4 3V8m4 7v-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  return (
    <svg className={common} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.06.06-2.78 2.78-.06-.06A1.8 1.8 0 0 0 15 19.4a1.8 1.8 0 0 0-1 .6v.08h-4V20a1.8 1.8 0 0 0-1-.6 1.8 1.8 0 0 0-1.98.36l-.06.06-2.78-2.78.06-.06A1.8 1.8 0 0 0 4.6 15a1.8 1.8 0 0 0-.6-1h-.08v-4H4a1.8 1.8 0 0 0 .6-1 1.8 1.8 0 0 0-.36-1.98l-.06-.06 2.78-2.78.06.06A1.8 1.8 0 0 0 9 4.6a1.8 1.8 0 0 0 1-.6v-.08h4V4a1.8 1.8 0 0 0 1 .6 1.8 1.8 0 0 0 1.98-.36l.06-.06 2.78 2.78-.06.06A1.8 1.8 0 0 0 19.4 9c.13.37.34.71.6 1h.08v4H20a1.8 1.8 0 0 0-.6 1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="mt-8 space-y-1" aria-label="Application navigation">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href === "/reports" && pathname.startsWith("/reports/"));
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
              active
                ? "bg-blue-400/[0.1] text-white shadow-[inset_0_0_0_1px_rgba(96,165,250,0.13)]"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white",
            )}
            href={link.href}
            key={link.href}
          >
            <span
              className={cn(
                "transition-colors",
                active
                  ? "text-blue-300"
                  : "text-slate-500 group-hover:text-blue-300",
              )}
            >
              <NavIcon name={link.icon} />
            </span>
            {link.label}
            {active && (
              <span className="ml-auto size-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(96,165,250,0.9)]" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-0.5" aria-label="Mobile navigation">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href === "/reports" && pathname.startsWith("/reports/"));
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={cn(
              "grid size-9 place-items-center rounded-lg transition",
              active
                ? "bg-blue-400/10 text-blue-200"
                : "text-slate-500 hover:bg-white/[0.05] hover:text-white",
            )}
            href={link.href}
            key={link.href}
            title={link.label}
          >
            <NavIcon name={link.icon} />
            <span className="sr-only">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
