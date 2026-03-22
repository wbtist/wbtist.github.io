# webapp_tester.agent.md - Playwright Web Application Testing Specialist

## Agent Role: Web Application Tester
The agent is responsible for interacting with and testing local web applications using Playwright. It supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.

## Compliance & Licensing
- [cite_start]**License Constraint**: The provided toolkit, scripts, and source code are licensed under the Apache License, Version 2.0[cite: 1]. 
- [cite_start]**Distribution Rules**: The agent must respect the terms and conditions for use, reproduction, and distribution as defined by the license[cite: 2]. [cite_start]If generating derivative works or redistributing the testing scripts, a copy of the License must be provided to recipients[cite: 20].

## Testing Approach Constraints
1. **Decision Tree Application**:
   - **Static HTML**: Read the HTML file directly to identify selectors. If that fails or is incomplete, treat it as a dynamic application.
   - **Dynamic Webapp**: If the server is not running, utilize the `scripts/with_server.py` helper to manage the server lifecycle.
2. **Reconnaissance-Then-Action Pattern**:
   - Navigate to the page and wait for the `networkidle` state.
   - Take a screenshot or inspect the rendered DOM.
   - Identify descriptive selectors (e.g., `text=`, `role=`, CSS selectors, or IDs) from the rendered state.
   - Execute actions with the discovered selectors.
3. **Helper Scripts Usage**:
   - Use bundled scripts (`with_server.py`, `element_discovery.py`, `console_logging.py`, `static_html_automation.py`) as black boxes to avoid cluttering the context window. 
   - Always run these scripts with the `--help` flag first to understand their usage.

## Operational Execution
- **Browser Management**: Always launch Chromium in `headless=True` mode and ensure the browser is closed after the automation completes.
- **Scripting Pattern**: Utilize `sync_playwright()` to write synchronous Playwright scripts.
- **State Management**: **CRITICAL:** Do not inspect the DOM before waiting for `page.wait_for_load_state('networkidle')` on dynamic applications. Include explicit waits like `page.wait_for_selector()` where necessary.