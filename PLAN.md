# PLAN — Add Three Content Sections to Metaweb Course Site

## Task Restatement
Add three new editorial content sections to `src/routes/index.tsx` (the main landing page):
1. "The Internet Is About to Gain a New Layer" — manifesto/intro
2. "After This Course, You'll See the Web Differently" — outcomes list
3. "Imagine Reading the Internet Differently" — experiential/cinematic close

## Placement Finding
No weekly breakdown (Week 1 / Week 2 / Week 3) section exists in the current codebase.
The task says "below weekly breakdown, above pricing/CTA section".
Since no weekly breakdown exists, the three sections will be inserted **between the
existing DESCRIPTION section and the THREE PATHS (pricing/CTA) section** — i.e.,
directly above the `id="paths"` section, which is the most logical position and
satisfies "above the pricing/CTA section".

## Approach
Single approach: inline JSX sections added directly to `index.tsx` between DESCRIPTION
and THREE PATHS, matching existing design system (Tailwind/OKLCH design tokens, Fraunces
display font, Inter body, cream/ink/navy/electric palette).

**Section 1** — Large headline + body paragraph + subhead + 6-item bullet list.
Layout: cream background, generous vertical spacing, max-w-4xl for readability.

**Section 2** — Headline + subhead + 10-item bullet list.
Layout: navy-deep background (dark panel) to create visual break, cream text.

**Section 3** — Cinematic, experiential. Headline + opening line + 8 bullets + 5 closing
prose lines.
Layout: cream background, closing lines each on their own typographic line in display font.

## Files to Touch
- `src/routes/index.tsx` — insert ~130 lines of JSX between DESCRIPTION and THREE PATHS

## Risks
- All Tailwind classes are already in design system — no purge risk
- No new deps required
- Must not change existing sections outside insertion point

## Design Tokens (from institutional knowledge)
- bg-cream, bg-navy-deep, text-electric, text-electric-bright, text-ink, text-cream
- font-display = Fraunces, body = Inter
- Spacing rhythm: py-20 for major sections, mb-12 for heading blocks
