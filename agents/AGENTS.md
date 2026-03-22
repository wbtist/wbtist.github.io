# Istvan Toth - Portfolio - Antigravity Project Directives

## Project Overview

This is a static personal portfolio/website built with the Astro framework, targeting GitHub Pages for deployment. The architecture strictly follows the Antigravity three-tier static model: Data (Content), Logic (Astro build/scripts), and Presentation (HTML/CSS/Components).

## Core Architectural Constraints

1. **Framework Strictness**: Do not introduce React or client-side JavaScript unless explicitly required for interactive "islands". Default to pure Astro components (`.astro`) for structural UI.
2. **Static Output**: The project relies on `output: 'static'`. Do not implement SSR (Server-Side Rendering) middleware or server endpoints.
3. **Asset Management**: All images destined for the final build must be placed in `src/assets/` to utilize Astro's automatic image optimization (`<Image />` component).

## Agent Orchestration & Roles

When operating within this workspace, specialized subagents must adhere to the following strict boundaries:

### 1. Brand Stylist (`brand_stylist.agent.md`)

- **Scope**: Manages all CSS/SCSS within `src/styles/` and component-level `<style>` tags.
- **Directive**: Enforce the designated color palette and typography across all Astro components. Ensure responsive design principles (mobile-first) are applied natively.

### 2. Webapp Tester (`webapp_tester.agent.md`)

- **Scope**: Operates entirely within the `tests/` directory and `.github/workflows/`.
- **Directive**: Write Playwright E2E tests focusing on the final static output. Before testing, run `npm run build` and `npm run preview` to simulate the GitHub Pages environment locally. Validate link integrity and responsive DOM elements.

### 3. Script Optimizer (`script_optimizer.agent.md`)

- **Scope**: Manages the build lifecycle, `package.json`, and any Python/Node utility scripts in `scripts/`.
- **Directive**: Ensure the `deploy.yml` GitHub Action remains deterministic. If custom build scripts are added (e.g., automated portfolio data fetchers), they must exit with explicit status codes.

### 4. Doc Co-authoring (`doc_coauthoring.agent.md`)

- **Scope**: Manages Markdown content within `src/content/` and `README.md`.
- **Directive**: Structure professional text for the portfolio. Content must remain pure data (Markdown/JSON) and never contain inline styling or hardcoded HTML structure.

## Operational Execution

Before proposing code modifications, agents must verify the context of the directory they are operating in. Never mix content (`src/content/`) with presentation logic (`src/components/`)
