# PLAN — Apply Daveed Benjamin's Feedback (5 Fixes)

## Task Restatement
Apply five targeted fixes to the Metaweb course site based on Daveed Benjamin's feedback.
All fixes are existing-content corrections — no new features.

## Fix-by-Fix Analysis

### Fix 1 — Remove quotes from first hero panel
**Finding**: The hero on `index.tsx` (lines 32–83) has NO quotation marks. The only
visible `"..."` wrapping text anywhere in the site is in `begin-your-journey.tsx` line 197:
`"{session}"` — this causes session titles to render as e.g. `"The Crisis of Cognitive Freedom"`.
**Action**: Remove the literal `"` quote chars from around `{session}` in that template.
Since all three week rows share one JSX template, all three are fixed simultaneously.

### Fix 2 — Slow down the book-cover GIF
**Finding**: `bookCover` (from `src/assets/book-cover.gif`) is rendered in the
`ABOUT THE BOOK` section of `index.tsx` (line 413–416) with no class.
**Caveat**: CSS `animation-duration` does NOT control GIF frame timing (baked into file).
**Action**: Add class `book-cover` to the `<img>`. Add a CSS rule
`img.book-cover { animation-duration: 3s; }` to `styles.css` with a code comment
explaining the limitation.

### Fix 3 — Panel 3 display time
**Finding**: No carousel, slideshow, or auto-advance timer exists anywhere in the codebase.
The three editorial sections on `index.tsx` (Section 1/2/3) and the three week panels
on `begin-your-journey.tsx` are all static HTML — no timing mechanism.
**Action**: Note this limitation clearly in the PR description. No code change possible
without knowing what specific mechanism Daveed expects.

### Fix 4 — One reading per week
**Finding**: `begin-your-journey.tsx` weeks array:
- Week 1: `"Part One & Two"` (too many!)
- Week 2: `"Part Three (Emergence)"` (same reading as Week 3!)
- Week 3: `"Part Three (What Becomes Possible)"` (same reading as Week 2!)
**Action**: Update to distinct readings:
- Week 1: `"Part One"`
- Week 2: `"Part Two"`
- Week 3: `"Part Three"`

### Fix 5 — Add favicon
**Finding**: `public/` only has `404.html` and `begin-your-journey.mp4`. No image in `public/assets/`.
`book-cover.gif` is in `src/assets/` (Vite-managed, not statically served at root).
**Action**: Copy `src/assets/book-cover.gif` → `public/assets/book-cover.gif`,
then add `<link rel="icon" type="image/gif" href="/assets/book-cover.gif">` to `index.html`.

## Files to Touch
- `src/routes/begin-your-journey.tsx` — Fix 1 (quotes) + Fix 4 (readings)
- `src/routes/index.tsx` — Fix 2 (add book-cover class to img)
- `src/styles.css` — Fix 2 (CSS rule for book-cover img)
- `public/assets/book-cover.gif` — Fix 5 (new file, copy from src/assets)
- `index.html` — Fix 5 (add favicon link)

## Risks
- GIF copy to public/: need to use `cp` via Bash since Write tool is text-only
- Fix 3 has no actionable code change — document clearly in PR
- Build must be verified before PR
