# Automaton Memory System launch page, Direction 2: LEDGER

A launch note typeset like a technical journal. Light theme locked, print grid, serif display and body, real figures and tables. Built from `_template/` (Vite 7, React 19, TypeScript strict, Tailwind v4, `motion/react`, `@phosphor-icons/react`).

## Run

```
npm install
npm run build        # tsc -b && vite build
npm run preview -- --port 4182 --strictPort
```

`vite.config.ts` base handling (`BASE_PATH`) is untouched. Every asset is referenced through `import.meta.env.BASE_URL` or a root-relative URL that Vite rewrites, so the site works under `/ams-launch-ledger/`. No image is imported with `import x from`; a missing file cannot break the build.

## Type and palette

- Newsreader Variable (`@fontsource-variable/newsreader`, `opsz.css` and `opsz-italic.css`): display, body, and italic emphasis in the same family. `font-optical-sizing: auto` is set on `body`, so the optical size axis follows the rendered size. Italics are the real italic face (verified in Playwright: the italic `FontFace` reports `status: loaded` and `document.fonts.check("italic 400 40px 'Newsreader Variable'")` is true).
- IBM Plex Mono (`@fontsource/ibm-plex-mono`, latin 400 and 500): tables, figure labels, marginalia, tool names, the dateline.
- Paper `#F2F2EF`, paper-2 `#E9E9E5`, ink `#15181D`, muted `#5B6068`, rule `rgba(21,24,29,0.16)`, accent `#2E6FA9` (links, figure and table numbers, the one rule under the masthead), accent tint `#E3EDF6` (table header backgrounds).
- Radius 0 everywhere. No shadows. Hairline rules between parts. No cards.

## Layout

12-column grid at 1024px and up, max content width 1240px, 32px gutters. Body measure is capped at 65ch. A two-column marginalia column on the left carries pull quotes, source notes, the pilot note, Figure 4, and the single eyebrow; it collapses above the text below 1024px. Sticky masthead is exactly 64px including its accent rule; it collapses to a text "Menu" toggle below 768px.

## Parts (8) and layout families

| Part | id | Layout family |
| --- | --- | --- |
| Masthead and headline | `top` | Display stack (dateline, headline, deck, two CTAs) with Figure 1 full grid width below |
| The cold start | `the-argument` | Marginalia pull quote left, running text right |
| Three kinds of memory | `memory` | Figure 2 (SVG, 7 columns) left, text (5 columns) right |
| The loop | `the-loop` | Text (5 columns) left, Figure 3 (SVG circle) right. Second and last split in a row |
| Evidence | `evidence` | Full-width typeset tables with marginal source notes and commentary |
| The boundary | `the-boundary` | Display pull statement, paragraph with marginal photograph (Figure 4), then the real dashboard screenshot (Figure 5) |
| Rates | `rates` | Rate card table with marginal pilot note, then the interfaces paragraph and CTA row under the "Interfaces" eyebrow |
| Colophon | footer | Three-column colophon: wordmark, publisher and typefaces, links; copyright below |

Figures: Fig. 1 `img/ledger-chart.webp` (monochrome nautical chart, 3:2), Fig. 2 SVG tiers bands (two typeset layouts, wide and compact, so labels stay legible at 390px), Fig. 3 SVG loop with the real tool names on `textPath` arcs, Fig. 4 `img/ledger-archive.webp` (card catalog, 4:5, marginal width), Fig. 5 `img/smart-actions-scoreboard.webp` (real dashboard screenshot, grayscale, colour crossfades in on hover through opacity, so only opacity animates).

## Eyebrows

Two, the maximum allowed:

1. The mono dateline under the masthead: "A launch note from Dead Reckoning Foundry. September 2026." (counts as an eyebrow per DESIGN.md; set in mono, not uppercase).
2. "Interfaces" in the marginalia of the Rates part (uppercase, tracked).

The QA harness heuristic detects exactly one uppercase tracked label ("Interfaces").

## Motion

One `motion/react` fade-up per part on entry (600ms, ease `[0.16, 1, 0.3, 1]`, once). Link underlines grow in from the left on hover (transform only). Nothing else. `useReducedMotion()` renders every part complete with no entrance motion, and a global reduced-motion rule zeroes transitions. No scroll listeners, no GSAP. Anchor scrolling is smooth only via `html:focus-within`, so programmatic scrolls stay instant.

## Copy self-audit

Every visible string lives in `src/content.ts` and was re-read against DESIGN.md sections 0 and 1:

- Zero em-dashes or en-dashes in source or rendered text (harness `dashMatches` is 0 at every viewport).
- Every number traces to section 0: 730 days; 0.50 / 0.30 success, 0.7764 / 0.5532 path score, $33.28 / $41.46 cost, +20 points, +0.22, 19.7% lower, 67% higher with 20% lower cost on the same 10 tasks, tasks 10 to 19, March 25, 2026; the safety trio 1.00 / 0.50 / 0.00, 1.00 / 0.00 / 0.00, 0.00 / 0.80 / 1.00; rates $0, $199, +$299, from $999, 2 ABots, 100 memories, 100,000 memories, 500 automata; the pilot 3 slots, $500, 90 days; trust tiers T0 to T3; seven admission checks. The only other digits are figure numbers ("Fig. 4.") and the Discord invite path.
- Both required caveats are present verbatim: "Broader-domain claims are left off this page until they replicate." and "Synthetic offline harness. No third-party audit or certification is implied."
- Four CTA intents, one label each, page-wide: "Start free", "Read the whitepaper", "Join the Discord", "View on GitHub". All external links use `target="_blank" rel="noopener"`.
- Hero: four text elements (dateline, headline, 20-word deck, two CTAs). No tagline, no trust strip, no logos, no scroll cues, no version labels, no testimonials, no invented names or metrics.
- The eleven real MCP tool names are used only where the spec places them (Fig. 3 arcs and its alt text). Arguments are not shown anywhere, so nothing needs an "illustrative" label.

## QA results

Harness: `_tools/qa.mjs` run with Playwright through a module-resolution hook (see note below). Evidence in `_evidence/ledger/`:

- `pass1/`: 18 failures, all "image not loaded" for the two below-the-fold images that used `loading="lazy"` (the harness measures before scrolling). Fixed by loading all four small images eagerly.
- `pass2/` and `pass2/reduced/`: `failures: []` in both modes.
- `pass3/` and `pass3/reduced/` (final): `failures: []` in both modes. (An intermediate pass3 run caught a 330px overflow at 320 from a non-wrapping masthead wordmark; the wordmark now drops to 16px below 360px and pass3 was rerun clean.) No horizontal overflow at 320, 390, 768, 1024, 1440, 1920; zero console errors; zero failed requests; zero dashes; all images loaded with alt text; every link has a real href; one `h1`; hero headline (2 lines at desktop), 20-word deck and primary CTA all inside the first viewport at 1440x900 (CTA bottom 541px) and 390x844 (CTA bottom 508px); no interactive target under 44px at 390.

Screenshots: `desktop-full.png`, `mobile-full.png`, `desktop-hero.png`, `mobile-hero.png` in each pass folder, plus the same set under `reduced/`.

Additional checks: masthead height 64px at 320, 768, 1440 and 1920; nav on one line at 768 and 1920; real Newsreader italic loaded; hover underline growth renders.

## Deviations from DESIGN.md and reasons

- **Wordmark**: the official `ams_logo5.svg` was rendered on paper at 24, 32 and 48px and does not read (steel gradients and 8px lettering on a light ground). The spec's fallback is used: "Automaton Memory System" in Newsreader at 20px beside a plain hexagon outline in ink. The same hexagon is the favicon.
- **Dates**: section 3 says the dateline is the only date on the page, but section 0 requires the benchmark to be cited exactly (March 25, 2026) and the screenshot caption to say "Snapshot, April 2026", and the Colophon copy in section 3 itself carries "September 2026". These are treated as citations, not page dates: March 25, 2026 appears once in the Table 1 marginal source note; April 2026 once in the Fig. 5 caption; September 2026 in the dateline and the colophon, both as specified.
- **Table 1 rows**: "three rows plus a delta row" is read as header plus the two conditions plus a delta row; there are only two conditions in section 0.
- **Part 2 "run-in" heading**: set as an italic display heading above the text rather than run into the first line, to keep one consistent heading style across parts and a clean heading hierarchy for screen readers.
- **Rate card**: the tint header is applied to all three tables (one table style per page). The pilot sentence sits in the marginalia beside the rate card rather than under it.
- **Generated photography**: `_assets/gen/` contained `ledger-chart-a.png`, `ledger-chart-b.png` and `ledger-archive-a.png` (no `.webp`). `ledger-chart-a` (pencil track with fixes, dividers, parallel rule) and `ledger-archive-a` were converted with `_tools/img.mjs --gray` to neutral grayscale WebP at 1264px and 800px wide respectively and placed in `public/img/`. The `FigureImage` component still reserves the aspect-ratio box and removes a broken image behind a paper-2 panel, so a missing file degrades quietly.
- **QA harness invocation**: Node's ESM loader ignores `NODE_PATH`, so `node _tools/qa.mjs` cannot resolve `playwright` from `/opt/homebrew/lib/node_modules`. Without modifying `_tools/`, the harness was run with a small resolve hook: `node --import <scratch>/pw-hooks.mjs _tools/qa.mjs <url> <outdir>`, which re-resolves the bare specifier from `/opt/homebrew/lib/node_modules/@playwright/test/node_modules/`. Reduced-motion runs were written to `passN/reduced/` so both screenshot sets survive (the harness uses the same file names in both modes).

## TODOs

- If a curated `ledger-chart.webp` or `ledger-archive.webp` lands in `_assets/gen/`, copy it over `public/img/` (same names, neutral grayscale, 3:2 and 4:5).
- Fig. 1 is served at 1264px wide, the largest size the generated source provides; a 1920px source would sharpen it on high-density displays.
