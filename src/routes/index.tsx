import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Database, Workflow, Users, ShieldCheck, BookOpen } from "lucide-react";
import orbit from "@/assets/metaweb-orbit.jpg";
import bookCover from "@/assets/book-cover.gif";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Top bar */}
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <div className="flex items-center gap-4">
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60 lg:block">
              The Meta-Layer Initiative
            </span>
            <Link
              to="/begin-your-journey"
              className="inline-flex items-center gap-2 rounded-md border border-electric px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric transition hover:bg-electric hover:text-cream"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </header>

      {/* HERO — split panel, cream + navy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-ink/10">
        {/* Cream side */}
        <div className="relative bg-cream bg-dot-grid p-8 sm:p-14 lg:p-20">
          <div className="corner-marks relative text-ink/50" />
          <p className="mb-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/60">
            ISOC Nevada · Course
          </p>
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            The <em className="not-italic text-electric">Metaweb.</em>
            <br />
            The next <em className="not-italic text-electric">level</em>
            <br />
            of the internet.
          </h1>
          <p className="mt-8 max-w-md text-base text-ink/70">
            A course on how a meta-layer above today's Web can eliminate
            misinformation, enable collective intelligence, and reshape how
            humans and AI interact online.
          </p>
          <a
            href="#paths"
            className="mt-12 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em]"
          >
            Choose your path below
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-electric text-cream">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>

        {/* Navy side */}
        <div
          className="relative min-h-[420px] bg-navy-deep bg-cover bg-center text-cream lg:min-h-0"
          style={{ backgroundImage: `linear-gradient(135deg, oklch(0.16 0.06 262 / 0.85), oklch(0.16 0.06 262 / 0.7)), url(${orbit})` }}
        >
          <div className="absolute left-8 top-8 sm:left-14 sm:top-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
              The meta-layer.
              <br />
              Above the page.
            </p>
          </div>
          <div className="absolute bottom-8 right-8 text-right sm:bottom-14 sm:right-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/60">
              Based on the book by
              <br />
              <span className="text-cream">Bridgit DAO · CRC Press 2023</span>
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="border-b border-ink/10 bg-cream py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              About the course
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              A vision <em className="not-italic text-electric">for what</em>
              <br />
              the Web becomes <em className="not-italic">next.</em>
            </h2>
          </div>
          <div className="space-y-5 text-lg text-ink/75 lg:col-span-7 lg:col-start-6">
            <p>
              The Metaweb is a hyper-dimensional layer built above today's Web —
              connecting people, information, and AI with accountability and
              fair value exchange.
            </p>
            <p>
              This course unpacks the vision behind the book{" "}
              <em>The Metaweb</em> (CRC Press, 2023), the Meta-Layer
              Initiative, and what it means for developers, policymakers, and
              citizens who want to shape the next internet.
            </p>
          </div>
        </div>
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

      {/* THREE PATHS — main CTA */}
      <section id="paths" className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
                Three paths in
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Choose how you join.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-ink/60">
              Enroll today, study the source material first, or simply hold
              your seat for updates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* CARD 1 — Enroll */}
            <article className="relative flex flex-col rounded-md bg-navy-deep p-8 text-cream shadow-[0_30px_60px_-30px_oklch(0.16_0.06_262_/_0.6)]">
              <div className="absolute right-5 top-5 rounded-sm bg-electric px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]">
                Most popular
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
                Join the Course
              </p>
              <h3 className="mt-3 font-display text-3xl">Enroll today.</h3>

              <div className="mt-8">
                <div className="rounded-md border border-electric/40 bg-electric/10 p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-7xl text-cream">$249</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-3 pt-10">
                <a
                  href="https://www.zeffy.com/en-US/ticketing/the-metaweb-book-nft-course"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-between rounded-md bg-electric px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-electric-bright"
                >
                  Enroll Now — $249
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://www.zeffy.com/en-US/ticketing/the-metaweb-book-nft-course"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-between rounded-md border border-cream/30 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-cream/90 transition hover:border-electric hover:text-cream"
                >
                  Or reserve a seat — pay later
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <p className="text-center text-[11px] text-cream/50">
                  Same link — choose ticket or free seat reservation at checkout.
                </p>
              </div>
            </article>

            {/* CARD 2 — Book */}
            <article className="flex flex-col rounded-md border border-ink/15 bg-cream p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
                Read the book first
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink">
                Start with the source.
              </h3>
              <p className="mt-4 text-sm text-ink/65">
                The Metaweb (CRC Press, 2023) by Bridgit DAO. Two ways in.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-md border border-ink/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
                    Digital · NFT Edition
                  </p>
                  <p className="mt-1 text-xs text-ink/55">BTC Ordinals purchase</p>
                  <a
                    href="https://metawebbook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-electric"
                  >
                    Get Digital Edition <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="rounded-md border border-ink/15 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
                    Physical Copy
                  </p>
                  <p className="mt-1 text-xs text-ink/55">Available on Amazon</p>
                  <a
                    href="https://amazon.com/Metaweb-Bridgit-DAO/dp/1032125527"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-electric"
                  >
                    Order on Amazon <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* DISCLAIMER / MISSION */}
      <section className="bg-navy-deep py-16 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric-bright">
              Where proceeds go
            </p>
            <p className="mt-2 font-display text-2xl">Mission, not margin.</p>
          </div>
          <p className="text-base leading-relaxed text-cream/80 lg:col-span-9">
            <strong className="text-cream">
              Proceeds from this course go to The Meta-Layer Initiative
            </strong>{" "}
            — an open-source effort to build the application substrate that
            enables overlay applications, smart tags, and meta-communities
            where humans and agents interact above webpages. Your enrollment
            directly funds this work.
          </p>
        </div>
      </section>

      {/* CAPABILITIES strip — inspired by reference */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              What you'll learn
            </p>
            <h2 className="mt-3 font-display text-4xl">Core ideas of the meta-layer.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Database, title: "A Public Layer", body: "Decentralized space above the webpage — owned by no one, usable by all." },
              { Icon: Workflow, title: "Smart Tags & Overlays", body: "Annotate, verify, and contextualize information across the entire Web." },
              { Icon: Users, title: "Collective Intelligence", body: "From personal computing to shared sense-making between humans and AI." },
              { Icon: ShieldCheck, title: "Accountability", body: "Identity, reputation, and fair value exchange built into the protocol." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="bg-cream p-7">
                <Icon className="h-6 w-6 text-electric" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE BOOK */}
      <section className="border-y border-ink/10 bg-cream py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative flex aspect-[3/4] max-w-sm items-center justify-center overflow-hidden rounded-md p-4">
              <img
                src={bookCover}
                alt="The Metaweb book cover by Bridgit DAO"
                className="max-h-full max-w-full object-contain drop-shadow-[0_40px_60px_oklch(0.16_0.06_262_/_0.5)]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-electric">
              About the book
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight">
              The seminal work <em className="not-italic text-electric">on the Meta-Layer.</em>
            </h2>
            <p className="mt-6 text-lg text-ink/70">
              <em>The Metaweb</em> (CRC Press, 2023) by Bridgit DAO is a vision
              for decentralized public space above the webpage that enables the
              shift from personal to collective computing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://metawebbook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-wide text-cream hover:bg-navy-deep"
              >
                Digital Edition <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://amazon.com/Metaweb-Bridgit-DAO/dp/1032125527"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink/30 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream"
              >
                Amazon <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
            {/* <p className="mt-1">
              Questions?{" "}
              <a href="mailto:hello@isoc-nv.org" className="text-electric-bright underline-offset-4 hover:underline">
                hello@isoc-nv.org
              </a>
            </p> */}
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-cream/40">
              AI-aware · Mission-driven
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
