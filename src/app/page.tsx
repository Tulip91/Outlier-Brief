import { ContentIdeaCard, OutlierTable } from "@/components/data-display";
import {
  FeatureCard,
  Footer,
  Navbar,
  PricingCard,
} from "@/components/marketing";
import { Badge, Button, Card, SectionHeader } from "@/components/ui";
import { contentIdeas, outliers } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[580px] max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16),transparent_68%)]" />
          <div className="hero-atmosphere absolute inset-x-0 top-0 -z-20 mx-auto h-[760px] max-w-[1500px] opacity-35">
            <Image
              alt=""
              className="object-cover object-center mix-blend-screen"
              fill
              priority
              sizes="100vw"
              src="/images/outlier-brief-hero-atmosphere.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07090f]/30 via-[#07090f]/65 to-[#07090f]" />
          </div>
          <div className="mx-auto max-w-7xl text-center" data-reveal>
            <Badge tone="blue">Research intelligence for creators</Badge>
            <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Find the videos your competitors wish they made.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Outlier Brief spots unusually successful videos across your niche
              and turns them into clear, actionable content opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/reports/sample">
                View Sample Report{" "}
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  {"->"}
                </span>
              </Button>
              <Button href="/dashboard" variant="secondary">
                Open Dashboard
              </Button>
            </div>
            <Card className="float-slow mx-auto mt-14 max-w-6xl overflow-hidden border-white/[0.12] bg-[#0b0e17]/90 p-3 text-left shadow-[0_40px_110px_rgba(37,99,235,0.18)]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-2 pb-3">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-300/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-slate-500">
                  Weekly niche intelligence / Minecraft
                </span>
                <span className="ml-auto hidden items-center gap-2 text-xs text-emerald-300 sm:flex">
                  <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />
                  Live analysis
                </span>
              </div>
              <div className="grid gap-3 p-2 pt-4 lg:grid-cols-[1fr_320px]">
                <OutlierTable compact videos={outliers.slice(0, 4)} />
                <div className="space-y-3">
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Top recommendation
                    </p>
                    <p className="mt-3 font-semibold leading-6 text-white">
                      Minecraft But I Can Only Live Underground
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      89% confidence
                    </p>
                  </div>
                  {contentIdeas.slice(1, 3).map((idea) => (
                    <ContentIdeaCard idea={idea} key={idea.title} />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>
        <section
          className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-20 lg:px-8"
          data-reveal
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionHeader
              eyebrow="The problem"
              title="Your next upload should not be a guess."
              description="Small creators spend hours collecting signals manually, then still face a blank page when it is time to pick the next idea."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Checking competitor channels manually",
                "Sorting recent uploads one by one",
                "Guessing which ideas are worth adapting",
                "Getting generic ideas from AI tools",
                "Staring at YouTube Studio without a plan",
              ].map((item) => (
                <div
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-sm text-slate-300"
                  key={item}
                >
                  <span className="mr-3 text-blue-300">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 py-24 lg:px-8" data-reveal id="features">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="A clearer workflow"
              title="From breakout signal to your next upload."
              description="Outlier Brief focuses on the part that matters: turning unusual performance into a practical creative brief."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <FeatureCard icon="01" title="Discover Outliers">
                Find videos performing far above a channel&apos;s normal
                baseline.
              </FeatureCard>
              <FeatureCard icon="02" title="Decode Patterns">
                See the title formats, topics, and hooks behind winners.
              </FeatureCard>
              <FeatureCard icon="03" title="Generate Ideas">
                Turn proven patterns into new opportunities for your channel.
              </FeatureCard>
            </div>
          </div>
        </section>
        <section className="px-5 pb-24 lg:px-8" data-reveal>
          <div className="mx-auto max-w-7xl">
            <Card className="grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 md:p-10">
                <Badge tone="green">16.4x outlier score</Badge>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                  I Survived 100 Days Underground
                </h2>
                <p className="mt-2 text-slate-400">BlockForge · Minecraft</p>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-slate-500">Channel average</p>
                    <p className="mt-1 text-xl font-semibold">25,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Video views</p>
                    <p className="mt-1 text-xl font-semibold">410,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Outlier score</p>
                    <p className="mt-1 text-xl font-semibold text-emerald-300">
                      16.4x
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/[0.07] bg-white/[0.025] p-7 md:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                  Why it worked
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "survival challenge",
                    "clear restriction",
                    "curiosity gap",
                    "strong visual premise",
                  ].map((tag) => (
                    <Badge key={tag} tone="slate">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-widest text-violet-300">
                  Suggested follow-ups
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>100 Days Without Crafting</li>
                  <li>Minecraft But I Can Only Live Underground</li>
                  <li>I Let Villagers Control My Survival World</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
        <section
          className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 lg:px-8"
          data-reveal
          id="pricing"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Pricing"
              title="Start with a sharper content instinct."
              description="Mock pricing for the MVP. Choose the research depth that fits your channel."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <PricingCard
                name="Free"
                price="£0"
                description="A fast look at the workflow."
                features={[
                  "1 sample report",
                  "3 tracked competitor channels",
                  "Mock report preview",
                ]}
              />
              <PricingCard
                featured
                name="Creator"
                price="£9/mo"
                description="Weekly research for consistent creators."
                features={[
                  "10 tracked competitor channels",
                  "Weekly outlier reports",
                  "Content opportunity suggestions",
                  "Title pattern analysis",
                ]}
              />
              <PricingCard
                name="Growth"
                price="£19/mo"
                description="More niches and deeper tracking."
                features={[
                  "50 tracked competitor channels",
                  "Multiple niches",
                  "Deeper trend tracking",
                  "Exportable briefs",
                ]}
              />
            </div>
          </div>
        </section>
        <section className="px-5 py-24 text-center lg:px-8" data-reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Stop guessing. Start studying what already works.
          </h2>
          <Button className="mt-7" href="/reports/sample">
            View Sample Report
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
import Image from "next/image";
