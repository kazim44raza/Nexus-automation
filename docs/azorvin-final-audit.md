# Final Audit of Azorvin Website

## 1. Contrast Failures
- **Light Theme Bleed**: Several sections (FAQs, some cards) incorrectly use `bg-white` or `bg-slate-50` with lighter text, making them illegible.
- **Dark Mode Muted Text**: Muted text on `bg-bg-base` or `bg-bg-surface` is often too dim, failing WCAG AA.
- **Navy/Cyan Overuse**: Incorrect use of blue-tinted text on dark backgrounds causes visual fatigue and contrast failure.

## 2. Unreadable Text
- FAQ answers use a low-opacity white that blends into the background.
- Card labels on the workflow sections are often too small and lack contrast.
- Input placeholders in forms are nearly invisible.

## 3. Logo Problems
- **Root Cause**: The raw SVG has baked-in transparent padding and the container wrapper tries to hide it using a fixed square aspect ratio and negative margins.
- **Symptoms**: The logo looks cropped on the left side and disproportionately small compared to the wordmark.
- **Fix Required**: Modify the SVG `viewBox`, remove negative margins, apply `object-fit: contain` and `object-position: left center`.

## 4. Broken or Unclear CTAs
- **"Explore Architecture"**: Currently scrolls nowhere or acts as a non-functional pill.
- **Multiple Floating Contacts**: Both a WhatsApp bubble and a generic Chat widget overlap on mobile, creating tap-target conflicts.
- **Inconsistent Button System**: CTAs are a mix of pills, sharp corners, glows, and flat buttons.

## 5. Repeated Templates
- The `<ServiceLayout />` component is reused across 6 different pages, resulting in a thin, generic experience that feels like a template rather than a premium studio.

## 6. Unsupported Claims
- Hardcoded projections like "+23 patients", "65% cost reduction", and "+$34k MRR" on the Work/Case Studies page are fictional and undermine credibility. Must be replaced with measurable categories and workflow assumptions.

## 7. Generic AI Visual Patterns
- **The Galaxy/Sphere Object**: The `AutomationHub3D` features a particle sphere/galaxy that feels crypto-adjacent rather than reflecting a precision B2B operational system.
- **Glows & Gradients**: Purple/Cyan gradients and excessive glassmorphism make it look like a startup template.

## 8. Mobile Issues & Overflow
- Horizontal scrolling occurs on some animated sections because `overflow-hidden` is missing on the main wrappers.
- The 3D canvas often overflows its container on 390px viewports.
- The mobile menu doesn't contrast enough with the background when open.

## 9. Components Worth Preserving
- The `About` page copy (founding narrative and operational philosophy) is strong.
- The underlying Next.js App Router structure and dynamic routing.
- The overall site architecture (routes map cleanly to services).

## 10. Components That Must Be Rebuilt
- `AutomationHub3D.tsx` -> Must become a bespoke "machined metal" mechanism.
- `Navbar.tsx` and `Footer.tsx` -> Needs unified button system and fixed logo.
- `src/app/(marketing)/services/*` -> All 6 pages need bespoke interactive workflows.
- `src/app/globals.css` -> Needs the complete Azorvin Operational Objects token set.
- `FAQ` Accordions -> Needs readable contrast and robust keyboard navigation.
