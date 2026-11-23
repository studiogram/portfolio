# Studio Gram — working rules

## Hard rules (do not break)

- **NO COMMENTS.** Never add explanatory/doc/header comments to any code (PHP, JS, SCSS, Twig) unless I explicitly ask for a comment in that specific request. Write self-explanatory code instead. This has been asked many times — respect it.
- **Don't run builds.** `npm run dev` runs in parallel in my terminal and rebuilds on save. Never run `npm run build`/`dev` yourself. New block entries (a new `blocks/*/scripts.js`) need me to restart dev — tell me, don't do it.
- **Debug screenshots never go in the project root.** Use the scratchpad dir, and delete them (and `.playwright-mcp`) when done.

## Conventions

- **Grid:** `.grider` / `[data-block-type]` under `.studiogram` = `repeat(12)` mobile / `repeat(24)` desktop. Standard content placement = `.col-content` (col 2, span 10 mobile / span 22 desktop). Use `col-start` + `col-end`/span, not conflicting combos.
- **ACF JSON:** after editing `acf-json/*.json`, bump `modified` to now (`date +%s`) or the admin won't sync.
- **Reduced motion:** gate motion on `BlockParent.this.reduced` / `reducedMotion()`; don't re-inline matchMedia.
- **Lenis + hover:** pair `:hover` with `.is-hover` (Lenis freezes `:hover` on scroll).
- **GSAP on SVG elements with a baseline `transform` attr:** wrap in a clean `<g>` for GSAP, keep the `transform` on the inner element (GSAP overwrites `transform` and wipes it otherwise).
