import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const styles = cn(
    "group inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/80 active:translate-y-px",
    variant === "primary" &&
      "bg-white text-slate-950 shadow-[0_8px_24px_rgba(219,234,254,0.08)] hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-[0_12px_30px_rgba(96,165,250,0.14)]",
    variant === "secondary" &&
      "border border-white/12 bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.1]",
    variant === "ghost" &&
      "text-slate-300 hover:bg-white/[0.06] hover:text-white",
    className,
  );
  return href ? (
    <Link className={styles} href={href}>
      {children}
    </Link>
  ) : (
    <button className={styles} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Badge({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "violet" | "slate";
}) {
  const tones = {
    blue: "bg-blue-400/10 text-blue-200 ring-blue-400/20",
    green: "bg-emerald-400/10 text-emerald-200 ring-emerald-400/20",
    violet: "bg-violet-400/10 text-violet-200 ring-violet-400/20",
    slate: "bg-white/[0.06] text-slate-300 ring-white/10",
  };
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 text-sm font-bold tracking-tight text-white"
    >
      <Image
        alt=""
        className="size-8 transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105"
        height="32"
        src="/outlier-mark.svg"
        width="32"
      />
      {!compact && "Outlier Brief"}
    </Link>
  );
}
