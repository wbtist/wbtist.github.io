# Graph Report - .  (2026-07-25)

## Corpus Check
- 28 files · ~183,898 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 47 nodes · 34 edges · 15 communities (8 shown, 7 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Agent & CI/CD Workflows
- Project Manifest Dependencies
- Layouts & Blog Templates
- NPM Build Scripts
- Homepage Components
- Blog Articles
- Profile & Avatar Media
- Architecture Models
- Skill Creator Agent
- Brand Color Palette
- Donation Media
- Insight Engine UI Media
- Repository Overview Docs

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `../layouts/BaseLayout.astro` - 6 edges
3. `Antigravity Project Directives` - 4 edges
4. `astro` - 2 edges
5. `GitHub Pages Deployment Workflow` - 2 edges
6. `Fire & Ice Design System` - 2 edges
7. `Brand Stylist Subagent Spec` - 2 edges
8. `Script Optimizer Subagent Spec` - 2 edges
9. `How to Access My App with NordVPN` - 2 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Brand Stylist Subagent Spec` --semantically_similar_to--> `Fire & Ice Design System`  [INFERRED] [semantically similar]
  agents/brand_stylist.agent.md → DESIGN.md
- `Midnight Sunset Redesign Plan` --rationale_for--> `Fire & Ice Design System`  [INFERRED]
  implementation_plan.md → DESIGN.md
- `Script Optimizer Subagent Spec` --references--> `GitHub Pages Deployment Workflow`  [EXTRACTED]
  agents/script_optimizer.agent.md → .github/workflows/deploy.yml
- `Webicon Avatar wbtis` --semantically_similar_to--> `Profile Portrait Photo`  [INFERRED] [semantically similar]
  public/Webicon wbtis.png → public/profile.png
- `Antigravity Project Directives` --references--> `Brand Stylist Subagent Spec`  [EXTRACTED]
  agents/AGENTS.md → agents/brand_stylist.agent.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Antigravity Agent Subsystem Orchestration** — agents_agents_antigravity_directives, agents_brand_stylist_brand_stylist_agent, agents_webapp_tester_webapp_tester_agent, agents_script_optimizer_script_optimizer_agent, agents_doc_coauthoring_doc_coauthoring_agent [EXTRACTED 1.00]
- **VPN & Financial Utility Blog Ecosystem** — src_pages_blog_how_to_access_my_app_with_nordvpn_nordvpn_guide, src_pages_blog_why_revolut_premium_is_a_no_brainer_revolut_guide, src_pages_blog_multilingual_speech_to_insight_engine_speech_engine [EXTRACTED 1.00]

## Communities (15 total, 7 thin omitted)

### Community 0 - "Agent & CI/CD Workflows"
Cohesion: 0.22
Nodes (9): Antigravity Project Directives, Brand Stylist Subagent Spec, Doc Co-authoring Subagent Spec, Script Optimizer Subagent Spec, Webapp Tester Subagent Spec, Fire & Ice Design System, Astro Action Build Step, GitHub Pages Deployment Workflow (+1 more)

### Community 1 - "Project Manifest Dependencies"
Cohesion: 0.29
Nodes (6): astro, dependencies, astro, name, private, version

### Community 2 - "Layouts & Blog Templates"
Cohesion: 0.29
Nodes (5): ../styles/global.css, ../components/Footer.astro, ../components/Header.astro, ../layouts/BaseLayout.astro, sortedPosts

### Community 3 - "NPM Build Scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, dev, preview, start

### Community 4 - "Homepage Components"
Cohesion: 0.40
Nodes (4): ../components/AboutSection.astro, ../components/ProjectsTable.astro, apps, games

### Community 5 - "Blog Articles"
Cohesion: 0.67
Nodes (3): How to Access My App with NordVPN, Multilingual Speech-to-Insight Engine, Why Revolut Premium Is A No-Brainer

## Knowledge Gaps
- **29 isolated node(s):** `name`, `version`, `private`, `dev`, `start` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `NPM Build Scripts` to `Project Manifest Dependencies`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `../layouts/BaseLayout.astro` connect `Layouts & Blog Templates` to `Homepage Components`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._