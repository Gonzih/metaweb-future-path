import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Check } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/begin-your-journey")({
  component: BeginYourJourney,
});

const features = [
  {
    title: "NFT Digital Book",
    description: "Your key to the Metaweb. A living asset on the blockchain.",
  },
  {
    title: "3 Live Sessions",
    description: "Author cohort discussions. June 15, 22, 29.",
  },
  {
    title: "AI Annotation Layer",
    description: "Canopi-powered. Your insights persist across the web.",
  },
  {
    title: "Contribution Tokens",
    description: "High-value ideas earn on-chain recognition.",
  },
  {
    title: "Lifetime Access V2",
    description: "Your contribution markers shape the next edition.",
  },
];

const weeks = [
  {
    week: "Week 1",
    title: "The Shift — From Attention to Agency",
    reading: "Part One & Two",
    session: "The Crisis of Cognitive Freedom",
    dark: false,
  },
  {
    week: "Week 2",
    title: "Building the Overweb",
    reading: "Part Three (Emergence)",
    session: "The Mechanics of Collective Intelligence",
    dark: true,
  },
  {
    week: "Week 3",
    title: "The Noospheric Future",
    reading: "Part Three (What Becomes Possible)",
    session: "Governance & The Metaweb DAO",
    dark: false,
  },
];

const pricingFeatures = [
  "NFT Digital Book (BTC Ordinals)",
  "3 live cohort sessions with the author",
  "AI annotation layer via Canopi",
  "Contribution token rewards",
  "Lifetime access & V2 shaping rights",
];

function BeginYourJourney() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Header */}
      <header className="border-b border-cream/15 bg-navy-deep text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/">
            <Logo className="text-cream" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/60 transition hover:text-cream"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* 1. HERO — full bleed navy-deep */}
      <section className="relative bg-navy-deep py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative">
            <div className="corner-marks relative text-cream/20" />
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
              ISOC Nevada · Metaweb Course
            </p>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Begin Your{" "}
              <em className="not-italic text-electric">Journey.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Architecting the Metaweb — a 3-week course with the Author.
            </p>
            <p className="mt-4 font-display text-xl text-electric">
              June 15 · 22 · 29, 2026 · 11:30am–1pm
            </p>
          </div>

          {/* Video placeholder */}
          <div className="mt-14">
            <div
              id="course-intro-video"
              className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-md border border-cream/20 bg-navy"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/20 bg-cream/5 transition hover:bg-cream/10">
                  <Play className="h-7 w-7 translate-x-0.5 fill-cream/50 text-cream/50" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/40">
                  Introduction Video
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT YOU GET — cream, dot-grid */}
      <section className="bg-cream bg-dot-grid py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
            What's included
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Your <em className="not-italic text-electric">Investment.</em>
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/65">
            One purchase. Lifetime access to the Metaweb.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {features.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-md border border-ink/15 bg-cream p-6 shadow-[0_2px_12px_0_oklch(0.16_0.06_262_/_0.06)]"
              >
                <h3 className="font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE JOURNEY — alternating cream/navy panels */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
            Three weeks
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            The Journey.
          </h2>
        </div>
        {weeks.map(({ week, title, reading, session, dark }) => (
          <div
            key={week}
            className={
              dark
                ? "bg-navy-deep py-16 text-cream"
                : "border-t border-ink/10 bg-cream py-16 text-ink"
            }
          >
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p
                  className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-electric-bright" : "text-electric"}`}
                >
                  {week}
                </p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl">
                  {title}
                </h3>
              </div>
              <div className="space-y-4 lg:col-span-7 lg:col-start-5">
                <div
                  className={`rounded-md border p-5 ${dark ? "border-cream/15 bg-navy/40" : "border-ink/15 bg-cream"}`}
                >
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-cream/60" : "text-ink/50"}`}
                  >
                    Reading
                  </p>
                  <p
                    className={`mt-1 text-sm ${dark ? "text-cream/80" : "text-ink/75"}`}
                  >
                    {reading}
                  </p>
                </div>
                <div
                  className={`rounded-md border p-5 ${dark ? "border-cream/15 bg-navy/40" : "border-ink/15 bg-cream"}`}
                >
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-cream/60" : "text-ink/50"}`}
                  >
                    Live Session
                  </p>
                  <p
                    className={`mt-1 text-sm ${dark ? "text-cream/80" : "text-ink/75"}`}
                  >
                    "{session}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. PRICING — navy-deep, centered */}
      <section className="bg-navy-deep py-24 text-cream">
        <div className="mx-auto max-w-lg px-6 text-center">
          <span className="inline-block rounded-sm bg-electric px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-cream">
            Early Bird
          </span>

          <div className="mt-8 flex items-end justify-center gap-4">
            <span className="font-display text-8xl leading-none text-cream">
              $99
            </span>
            <span className="mb-2 font-display text-3xl text-cream/30 line-through">
              $249
            </span>
          </div>

          <ul className="mt-10 space-y-3 text-left">
            {pricingFeatures.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://www.zeffy.com/en-US/ticketing/the-metaweb-book-nft-course"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex w-full items-center justify-between rounded-md bg-electric px-6 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-electric-bright"
          >
            Enroll Now
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <p className="mt-5 text-[10px] leading-relaxed text-cream/40">
            Standard: $149 at Human Tech Week · $249 full price ·{" "}
            <span className="font-mono tracking-wider text-cream/50">
              ISOCNEVADAMEMBER
            </span>{" "}
            discount for ISOC members
          </p>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-navy-deep py-12 text-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo className="text-cream" />
            <p className="mt-3 font-display text-2xl italic text-cream/90">
              The Internet Is for Everyone.
            </p>
          </div>
          <div className="text-sm text-cream/60 sm:text-right">
            <p>Internet Society — Nevada Chapter</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-cream/40">
              AI-aware · Mission-driven
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
