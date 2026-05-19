# PLAN — Add Course Sections 4-7 + Browser Overlay Image

## Task Restatement
Insert sections 4-7 into `src/routes/index.tsx`, between section 3 ("Imagine Reading the Internet Differently") and the existing pricing/CTA ("THREE PATHS"). Also insert a browser overlay image section between sections 3 and 4.

## Files to Touch
- `src/routes/index.tsx` — insert ~180 lines of new JSX (sections 4-7 + image band)
- `public/assets/metaweb-overlay.png` — image asset (NOTE: not found in docx or uploads; section will reference path for future asset drop-in)

## Insertion Point
Section 3 ends at line 248. New content goes immediately before line 250 (THREE PATHS).

## Sections to Add (in order)
1. **Image band** — full-width visual of `/assets/metaweb-overlay.png` with caption
2. **Section 4** — "The AI Era Changes Everything" — dark/navy bg, bullet list
3. **Section 5** — "Early Perspectives" — 3 pull quotes, cream/ink, wide spacing
4. **Section 6** — "What Participants Say" — 5 student testimonials, minimal cards
5. **Section 7** — "This Course May Resonate With:" — clean list, 10 items

## Design Tokens
- cream: `oklch(0.965 0.012 85)` → `bg-cream`
- navy-deep: `oklch(0.16 0.06 262)` → `bg-navy-deep`
- electric: `oklch(0.55 0.24 265)` → `text-electric`
- electric-bright: `oklch(0.65 0.26 262)` → `text-electric-bright`

## Risks
- Overlay image file not available (docx had no embedded images, uploads didn't match) — code will reference path, build won't error since it's an `<img src>` not an import
- Adding ~180 lines to an already 480-line file is fine; no refactor needed
