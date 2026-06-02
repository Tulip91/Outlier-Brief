import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Card, Logo } from "@/components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07090f]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
          <Link className="transition hover:text-white" href="/#features">
            Features
          </Link>
          <Link className="transition hover:text-white" href="/reports/sample">
            Demo
          </Link>
          <Link className="transition hover:text-white" href="/#pricing">
            Pricing
          </Link>
        </div>
        <Button href="/dashboard" variant="secondary">
          Open Dashboard{" "}
          <span className="ml-2 transition-transform group-hover:translate-x-0.5">
            {"->"}
          </span>
        </Button>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <Logo />
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          <Link href="/#features">Product</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/settings">Settings</Link>
        </nav>
        <p>© 2026 Outlier Brief</p>
      </div>
    </footer>
  );
}

export function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <Card
      className={
        featured
          ? "relative border-blue-400/35 bg-blue-400/[0.08] p-6 hover:-translate-y-1 hover:border-blue-300/50"
          : "p-6 hover:-translate-y-1 hover:border-white/[0.16]"
      }
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-blue-400/15 px-2.5 py-1 text-xs font-semibold text-blue-200">
          Most popular
        </span>
      )}
      <h3 className="font-semibold text-white">{name}</h3>
      <p className="mt-6 text-4xl font-semibold tracking-tight text-white">
        {price}
      </p>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {features.map((feature) => (
          <li className="flex gap-2" key={feature}>
            <span className="text-emerald-300">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="mt-7 w-full"
        variant={featured ? "primary" : "secondary"}
      >
        Choose {name}
      </Button>
    </Card>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="group p-6 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.045]">
      <div className="mb-5 grid size-10 place-items-center rounded-xl bg-blue-400/10 text-blue-200 transition group-hover:bg-blue-400/20">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{children}</p>
    </Card>
  );
}
