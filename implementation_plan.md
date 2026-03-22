# Redesign Implementation Plan: Midnight Sunset

## Goal Description
Redesign the "wbtist.github.io" frontend developer portfolio to have a more premium, modern, and striking visual aesthetic. The current "cyan/purple hacker" theme will form the basis of a transition to a more refined **"Midnight Sunset"** design system, combining pitch-dark backgrounds with warm, vibrant neon orange-to-pink gradients. This will elevate the portfolio to feel more exclusive and high-end.

## User Review Required
> [!IMPORTANT]
> Please review the proposed **Midnight Sunset** aesthetic described below. If you prefer a different color palette (e.g., sticking to cool tones like blues/greens, or going for a light theme), let me know! Otherwise, I will proceed with this vibrant warm dark mode.

### Visual Direction: Midnight Sunset
* **Backgrounds**: Deep, rich blacks (`#0A0A0B` to `#141416`) providing ultra-high contrast.
* **Accents**: A stunning gradient from Vibrant Orange-Red (`#FF512F`) to Deep Pink (`#DD2476`).
* **Typography**: Retaining `Outfit` for bold, impactful headers and `Inter` for hyper-legible body text, but refining the weights and spacing.
* **Surfaces**: Upgraded glassmorphism panels with softer blurs, extremely subtle borders (`rgba(255, 255, 255, 0.05)`), and smooth hover lift animations.

## Proposed Changes

### Global Styling & Assets
#### [MODIFY] src/styles/global.css
- Overhaul CSS variables to implement the Midnight Sunset palette.
- Refine typography scales (larger, tighter tracking for headers; looser line-height for body).
- Enhance the `.glass-panel` utility with softer shadows and smoother backdrop-filters.
- Add micro-animations (e.g., a pulsing glow effect, refined hover states on links and table rows).

#### [MODIFY] DESIGN.md
- Document the new design system, color hex codes, typographic rules, and spacing guidelines so future development remains consistent.

### Component Updates
#### [MODIFY] src/components/AboutSection.astro
- Update the decorative glowing orb to match the new warm accent colors.
- Adjust text highlighting to leverage the new gradient.

#### [MODIFY] src/pages/index.astro
- Refine spacing and ensure the `ProjectsTable` integrations look stunning within the new container styles.

#### [MODIFY] src/components/Header.astro & src/components/Footer.astro
- Ensure the sticky header has the correct transparency and border to blend perfectly with the new background colors.
- Enhance navigation link hover states.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure the Astro project compiles successfully with no missing dependencies or syntax errors in the modified components.

### Manual Verification
- Start the Astro dev server `npm run dev`.
- Visually inspect the local site in a browser subagent (or ask the user to view it on their machine) to ensure responsive layouts, animations, and color contrasts are rendering correctly as per the premium design standard.
