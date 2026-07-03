# Iron Peak Fitness

A strength & conditioning gym site — Next.js 15 (App Router), TypeScript, Tailwind CSS v4.

## Design system

- **Palette**: charcoal iron (`--color-iron-950/900/800/700/500`), warm chalk white
  (`--color-chalk-50/100`), oxidized-iron accent (`--color-oxide-*`), rare brass
  highlight (`--color-brass-500`). All defined in `app/globals.css`.
- **Type**: Oswald (display, condensed/industrial), Inter (body), IBM Plex Mono
  (labels, schedule times, prices — anything data-like).
- **Signature motif**: `components/ElevationDivider.tsx` — a topographic
  contour line used between every section, labeled like waypoints on a climb
  (Base → Ascent → Ridge → Approach → Summit), tying the "Peak" name to a
  functional structural device rather than decoration.

## Getting started locally

This project was scaffolded without network access, so dependencies aren't
installed yet. On a machine with internet access:

```bash
cd iron-peak-fitness
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx      Root layout, font loading, metadata
  page.tsx         Assembles all sections
  globals.css      Tailwind v4 theme tokens + base styles
components/        One component per section
lib/
  types.ts         Content model
  data.ts          All copy/content — edit this to change site content
```

## Notes

- No external images are used — all visual texture comes from CSS/SVG
  (contour background, initials-as-avatars) so the design holds up without
  an image pipeline. Swap in real photography in `Trainers.tsx` and `Hero.tsx`
  whenever you're ready.
- The contact form is client-side only (`onSubmit={(e) => e.preventDefault()}`)
  — wire it up to an API route or a form service before shipping.
