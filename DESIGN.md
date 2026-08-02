# Design — Azorvin

This is the locked visual system for the Azorvin website. Every marketing, service, industry, content, and admin page should extend this system rather than inventing a new theme.

## Genre

Modern-minimal with a human service-studio voice. The site should feel engineered, composed, and trustworthy—not like a generic AI product template.

## Macrostructure family

- Marketing pages: Split Studio and Photographic Fold. Pair every technical claim with human or operational context.
- Service and industry pages: alternating proof-led modules with different visual compositions per route.
- Content pages: Long Document with restrained typography and minimal motion.
- Admin pages: Workbench; function first, no decorative enrichment.

## Theme

- Ink base: `#07111f`
- Deep navy surface: `#0b1b30`
- Raised navy surface: `#102641`
- Primary signal: `#3b9bff`
- Cyan highlight: `#18d4e8`
- Primary text: `#f4f9ff`
- Secondary text: `#b7c8dc`
- Muted text: `#7890aa`
- Rules: translucent cool-blue hairlines only

Blue is a signal, not wallpaper. Cyan/electric blue should occupy less than ten percent of a viewport. No purple, green, rainbow gradients, aurora blobs, glowing card borders, or decorative glassmorphism.

## Typography

- Display: Space Grotesk, 500–650, roman
- Body and UI: Instrument Sans, 400–650
- Mono: system monospace only for technical labels
- Headings use compact line-height and balanced wrapping. No italic words in headings and no gradient text.
- The Azorvin wordmark is uppercase Instrument Sans with deliberate tracking; it never uses the display serif treatment.

## Spacing and shape

- Spacious 4-point scale with varied section rhythm.
- Primary containers share one max-width.
- Cards use 12–18px radii only when they communicate grouping. Images can use asymmetric corner treatment.
- Clickable text never wraps.

## Motion

- One cursor-reactive object per viewport maximum.
- Cursor response belongs to a meaningful product/brand object, never a trailing glow.
- UI transitions: 150–260ms using exponential ease-out.
- Section motion is selective; the page should settle immediately.
- `prefers-reduced-motion` disables parallax, looping motion, and transforms.

## Imagery

- Use real, candid human photography with natural light and asymmetric crops.
- Photography shows consultation, collaboration, support, and operations—not posed “AI people.”
- Technical visuals explain a real workflow and must be labeled as examples when they contain illustrative data.
- No invented client logos, testimonials, metrics, reviews, or case-study outcomes.

## Logo

- Use `/azorvin-mark.png`, the isolated transparent emblem derived from the supplied master artwork.
- Always render with `object-contain` and equal internal padding. Never crop, mask, stretch, or place it in a competing tile.
- Pair with the uppercase AZORVIN wordmark in navigation and footer.

## CTA voice

- Primary: electric-blue/cyan signal fill, dark ink text, compact radius.
- Secondary: visible cool-blue border, transparent background.
- Copy is practical: “Book a consultation”, “See the system”, “Start a conversation”.

## What every page must share

- Logo treatment, typography, colour restraint, focus states, CTA voice, spacing rhythm, and truthful copy.
- Security and functional behaviour remain unchanged unless a page-specific task explicitly updates them.

## What pages may vary

- Hero composition, image crop, workflow visualization, section order, and proof format.
- Service pages should not be colour-swapped copies of one template.

/* Hallmark · genre: modern-minimal · macrostructure-family: Split Studio · design-system: DESIGN.md · designed-as-app */
