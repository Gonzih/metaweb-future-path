import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
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
    description: "Author cohort discussions.",
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
    reading: "Part One",
    session: "The Crisis of Cognitive Freedom",
    dark: false,
  },
  {
    week: "Week 2",
    title: "Building the Overweb",
    reading: "Part Two",
    session: "The Mechanics of Collective Intelligence",
    dark: true,
  },
  {
    week: "Week 3",
    title: "The Noospheric Future",
    reading: "Part Three",
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

          </div>

          {/* Intro video */}
          <div className="mt-14">
            <video
              src="/begin-your-journey.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="mx-auto w-full max-w-3xl rounded-lg"
              style={{ aspectRatio: '16/9', objectFit: 'cover' }}
            />
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
                    {session}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 1 — The Internet Is About to Gain a New Layer */}
      <section className="border-b border-ink/10 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              Why this course exists
            </p>
            <h2 className="font-display text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
              The Internet Is About to Gain a New Layer
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-ink/75 sm:text-xl">
              For decades, we've treated the Web as a collection of pages, feeds,
              and platforms. But what if the webpage is only the first layer? This
              course explores the emergence of the Metaweb: A shared coordination
              layer above Today's Web where context, trust, presence, and collective
              intelligence become visible and actionable. You'll learn why the current
              Internet fragments attention and weakens collective sensemaking — and
              how browser overlays, contextual intelligence, and civic trust
              infrastructure may reshape how humans collaborate online.
            </p>

            <div className="mt-14 border-t border-ink/10 pt-12">
              <p className="mb-8 text-base font-semibold text-ink">
                This is not a course about speculative hype. It is an exploration of:
              </p>
              <ul className="grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-2">
                {[
                  "Interface-level governance",
                  "Contextual trust systems",
                  "Collective intelligence",
                  "AI-era civic infrastructure",
                  "Cognitive freedom",
                  "The future of human coordination online",
                ].map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-base text-ink/80">
                    <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — After This Course, You'll See the Web Differently */}
      <section className="border-b border-cream/10 bg-navy-deep py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
              Learning outcomes
            </p>
            <h2 className="font-display text-5xl leading-[1.0] sm:text-6xl">
              After This Course, You'll See the Web Differently
            </h2>
            <p className="mt-8 text-base font-semibold uppercase tracking-[0.15em] text-cream/60">
              You'll understand:
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Why feeds replaced contextual navigation – and what humanity lost in the transition",
                "Why the current Web structurally weakens collective intelligence",
                "How overlays can transform webpages into collaborative civic spaces",
                "Why AI-generated content creates an urgent need for contextual trust infrastructure",
                "How browser overlays become public digital infrastructure",
                'Why \u201cpresence above the webpage\u201d changes online coordination',
                "How smart tags, bridges, and contextual layers create new forms of knowledge organization",
                "Why interface design may become one of the most important governance challenges of the AI era",
                "How decentralized trust systems can emerge without requiring centralized control",
                "Why the future of the Internet may depend on shared context rather than algorithmic feeds",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 border-t border-cream/10 pt-5">
                  <span className="w-7 flex-shrink-0 text-[11px] font-semibold tabular-nums text-electric-bright/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Imagine Reading the Internet Differently */}
      <section className="border-b border-ink/10 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              The terrain
            </p>
            <h2 className="font-display text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
              Imagine Reading the Internet Differently
            </h2>

            <p className="mt-10 text-xl font-semibold text-ink">
              Imagine reading an article and instantly seeing:
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Contextual fact overlays",
                "Trusted expert commentary",
                "AI provenance signals",
                "Live conversations anchored to specific claims",
                "Community annotations from people you trust",
                "Semantic bridges to related ideas",
                "Contextual governance signals",
                "The visible presence of others exploring the same topic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-md border border-ink/12 bg-ink/[0.03] px-5 py-4 text-sm text-ink/80">
                  <span className="block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-16 space-y-4 border-l-2 border-electric pl-8">
              <p className="font-display text-2xl leading-snug text-ink">
                Imagine moving through a Web where context is no longer hidden.
              </p>
              <p className="font-display text-2xl leading-snug text-ink">
                Where trust is composable.
              </p>
              <p className="font-display text-2xl leading-snug text-ink">
                Where intelligence becomes collaborative.
              </p>
              <p className="font-display text-2xl leading-snug text-ink">
                Where AI systems operate inside visible civic boundaries rather than opaque platforms.
              </p>
              <p className="font-display text-2xl leading-snug text-electric">
                That is the terrain this course explores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSER OVERLAY IMAGE — between section 3 and 4 */}
      <section className="border-b border-ink/10 bg-ink py-16">
        <div className="mx-auto max-w-5xl px-6">
          <img
            src="/assets/metaweb-overlay.png"
            alt="A browser article enriched with contextual overlays, trust signals, and community presence"
            className="w-full rounded-md shadow-[0_40px_80px_-20px_oklch(0_0_0_/_0.6)]"
          />
          <p className="mt-6 text-center text-sm text-cream/50 italic">
            The same article — enriched with context, trust, and people.
          </p>
        </div>
      </section>

      {/* SECTION 4 — The AI Era Changes Everything */}
      <section className="border-b border-cream/10 bg-navy-deep py-24 text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
              The stakes
            </p>
            <h2 className="font-display text-5xl leading-[1.0] sm:text-6xl lg:text-7xl">
              The AI Era Changes Everything
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-cream/80 sm:text-xl">
              The Internet is entering a new phase. AI systems can now generate text, images,
              video, persuasion, identities, and social behavior at planetary scale. As synthetic
              media proliferates, humanity faces a growing crisis of:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Trust",
                "Context verification",
                "Identity",
                "Cognitive sovereignty",
                "Collective sensemaking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-cream/15 bg-cream/5 px-5 py-4 text-sm font-semibold text-cream/85"
                >
                  <span className="block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric-bright" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-14 border-t border-cream/10 pt-12 space-y-5 text-base leading-relaxed text-cream/75">
              <p>
                The Metaweb proposes a different path: A civic coordination layer above the
                webpage where trust signals, contextual overlays, presence systems, and
                community governance become part of the browsing experience itself.
              </p>
              <p>
                This course examines the philosophical, technical, and societal foundations
                of that transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Early Perspectives (pull quotes) */}
      <section className="border-b border-ink/10 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              Early perspectives
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              What experts say.
            </h2>

            <div className="mt-16 space-y-16">
              {[
                {
                  quote:
                    "The notion of a meta-environment above the webpage is directionally interesting. Overall, the book presents a creative argument that warrants further discussion and exploration.",
                  author: "Vint Cerf",
                  role: "One of the Fathers of the Internet",
                },
                {
                  quote:
                    "The Metaweb proposal is both inspiring and realistic. It presents a feasible solution to problems of the digital age.",
                  author: "Jean Wagemans",
                  role: "Amsterdam Center for Language and Communication",
                },
                {
                  quote:
                    "The book describes the Overweb pattern which builds on pioneering technologies like topic maps and the semantic web, bringing to the foreground emphasis on safety, security, privacy, and governance.",
                  author: "Jack Park",
                  role: "Cofounder of Topic Quests",
                },
              ].map(({ quote, author, role }) => (
                <figure key={author} className="border-l-2 border-electric pl-8">
                  <blockquote className="font-display text-2xl leading-snug text-ink sm:text-3xl">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="text-sm font-semibold text-ink">{author}</span>
                    <span className="mx-2 text-ink/30">·</span>
                    <span className="text-sm text-ink/55">{role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Student testimonials */}
      <section className="border-b border-ink/10 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              Participants
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              What Participants Say
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                "This permanently changed how I think about the Web.",
                "I finally understood how trust could exist above platforms instead of inside them.",
                "The course made the Metaweb feel concrete rather than abstract.",
                "I now see browser interfaces as civic infrastructure.",
                "This connected AI governance, collective intelligence, and interface design in a way I had never considered before.",
              ].map((quote, i) => (
                <blockquote
                  key={i}
                  className="rounded-md border border-ink/12 bg-ink/[0.03] px-6 py-5 text-base leading-relaxed text-ink/80"
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Who This Course Is For */}
      <section className="border-b border-ink/10 bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              Audience
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              This Course May Resonate With:
            </h2>

            <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Civic technologists",
                "Interface designers",
                "AI governance researchers",
                "Collective intelligence thinkers",
                "Digital rights advocates",
                "Educators and organizers",
                "Protocol and standards communities",
                "Futurists and systems thinkers",
                "Builders exploring the future of online coordination",
                "People seeking alternatives to extractive platform dynamics",
              ].map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-base text-ink/80">
                  <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-electric" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. PRICING — navy-deep, centered */}
      <section className="bg-navy-deep py-24 text-cream">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mt-8 flex items-end justify-center">
            <span className="font-display text-8xl leading-none text-cream">
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
