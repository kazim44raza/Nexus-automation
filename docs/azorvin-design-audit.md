# Azorvin Design Audit

## Global Analysis
**Existing visual problems:** The current site uses a generic "AI-generated SaaS" template style. It relies heavily on a white theme, basic cards, predictable bento grids, and lacks a distinctive brand voice.
**Typography issues:** The current typography relies on predictable modern sans-serifs (likely Inter or similar) without an editorial hierarchy.
**Copy weaknesses:** Copy sounds synthetic and vague ("transform your business", "intelligent automation").
**Components to redesign:** The entire page shell, global navigation, footer, hero sections, repetitive bento grids, and current 3D implementations.

## Route-by-Route Breakdown

### `/(marketing)/page.tsx` (Homepage)
- **Generic Elements:** Three-card sections, typical SaaS hero, glowing backgrounds.
- **Copy:** Vague AI transformation promises.
- **Action:** Full redesign around a single strong value proposition ("Automation systems that keep business moving"). Implement custom Three.js sculptural system visual.

### `/(marketing)/about/page.tsx`
- **Generic Elements:** Standard team/history layout.
- **Copy:** Sounds mechanical.
- **Action:** Convert to an editorial layout using asymmetrical grids. Ground the narrative in calm, credible terms.

### `/(marketing)/services/*` (Voice Agents, Chatbots, etc.)
- **Generic Elements:** Repetitive node graphs, humanoid robot imagery, floating chat bubbles.
- **Copy:** Sounds overly technical but empty.
- **Action:** Distinct visual metaphor for each service (e.g., restrained dimensional representation of a call for Voice Agents). 

### `/(marketing)/solutions/page.tsx`
- **Generic Elements:** Card grids applied uniformly.
- **Action:** Break the card pattern. Use layered sections and alternating visual rhythms.

### `/(marketing)/contact/page.tsx`
- **Generic Elements:** Standard centered form.
- **Action:** Improve field hierarchy, focus states, labels, and conversion flow without relying on placeholder text. Maintain Calendly integration.

### `/(marketing)/blog/*` & `/(marketing)/resources/page.tsx`
- **Generic Elements:** Predictable blog grids.
- **Action:** Apply the Newsreader editorial typography for a premium reading experience.

### `/(marketing)/industries/*`
- **Generic Elements:** Standard repetitive layouts copied from homepage.
- **Action:** Give these a distinct composition while sharing the design system.

### `/(marketing)/privacy/page.tsx` & `/(marketing)/terms/page.tsx`
- **Generic Elements:** Default markdown styling.
- **Action:** Restrained styling using Newsreader for readability, dark editorial theme.

### `/(admin)/*`
- **Action:** Update the UI shell to match the dark mineral theme. Ensure form accessibility and high contrast.

## Accessibility & Performance
- **Concerns:** Current animations might cause layout shifts. Contrast in current state needs checking.
- **Action:** Ensure WCAG AA contrast for text. Add `prefers-reduced-motion` support. Lazy-load 3D scenes below the fold. Compress textures.
