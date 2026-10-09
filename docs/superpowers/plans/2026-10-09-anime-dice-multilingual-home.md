# Anime Dice Multilingual Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a four-language, search-optimized Anime Dice wiki homepage that matches the benchmark site's structure without copying its branding or unsupported claims.

**Architecture:** Astro statically generates one homepage per locale from a shared language-neutral fact model and four typed translation dictionaries. Focused components render the benchmark-aligned two-column layout, while shared SEO helpers generate canonical links, reciprocal `hreflang`, JSON-LD, sitemap, and crawl controls.

**Tech Stack:** Astro, TypeScript, CSS, Vitest, Playwright, npm

**Spec:** `docs/superpowers/specs/2026-10-09-anime-dice-multilingual-home-design.md`

## Global Constraints

- Routes are exactly `/en/`, `/pt-br/`, `/es/`, and `/id/`; `/en/` is `x-default`.
- Phase 1 exposes no unfinished article URL and produces zero internal 404s.
- Facts come only from the supplied research or verified linked sources; volatile data shows `Last checked: Oct 5, 2026`.
- Do not translate `Anime Dice`, code strings, `UPDATE7`, `Lucky Spins`, `Trait Rerolls`, `Gems`, `Tickets`, or actual in-game names.
- Default theme is dark; main body text is at least `16px`, controls at least `14px`, and layouts remain usable at 200% zoom.
- Exclude cheat, exploit, injection, script, keyless, and autofarm content.
- Do not emit a fabricated production origin; deployment validation requires `SITE_URL`.
- Do not copy benchmark text, branding, or media.

## Review Focus

- Unsupported browser locale or corrupt saved locale choice falls back to English and keeps visible locale links — covered by Task 7 browser tests.
- Missing or partial locale dictionary fails validation instead of silently falling back — covered by Task 3 contract tests.
- Missing production `SITE_URL` fails the SEO build check with a direct message — covered by Task 4 tests.
- Long Portuguese and Spanish labels do not overflow the header, cards, or mobile viewport — covered by Task 7 responsive tests.
- Code status, facts, and FAQ JSON-LD stay identical across localized views except for translated prose — covered by Tasks 2, 3, and 8 tests.

---

## File Structure

- Project setup: `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.env.example`, `.gitignore`
- Facts and contracts: `src/data/game.ts`, `src/data/modules.ts`, `src/i18n/types.ts`, `src/i18n/index.ts`, `src/i18n/{en,pt-br,es,id}.ts`
- Site logic: `src/config/site.ts`, `src/config/navigation.ts`, `src/lib/validation.ts`, `src/lib/seo.ts`
- Page shell: `src/layouts/WikiLayout.astro`, `src/pages/index.astro`, `src/pages/[locale]/index.astro`
- Components: `src/components/{Header,AdSlot,Hero,Sidebar,LatestUpdates,Journey,Trending,AboutGame,ExploreModules,Faq,FinalCta,Footer}.astro`
- Styling and scripts: `src/styles/global.css`, `src/scripts/theme.ts`, `src/scripts/menu.ts`, `src/scripts/locale-gateway.ts`
- Public assets: `public/favicon*`, `public/apple-touch-icon.png`, `public/assets/anime-dice-hero.jpg`
- Crawl endpoints: `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`
- Tests: `tests/unit/*.test.ts`, `tests/e2e/home.spec.ts`, `tests/e2e/seo.spec.ts`, `playwright.config.ts`, `vitest.config.ts`

### Task 1: Initialize the Astro project and test harness

**Files:**
- Create: `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.env.example`, `.gitignore`
- Create: `vitest.config.ts`, `playwright.config.ts`, `tests/unit/scaffold.test.ts`

**Interfaces:**
- Consumes: the empty project root and approved spec.
- Produces: npm scripts `dev`, `build`, `preview`, `test`, `test:unit`, and `test:e2e`; strict TypeScript and static Astro output.

- [ ] **Step 1: Initialize version control**

Run: `git init`  
Expected: an empty repository whose working tree still contains `docs/`, `prompt/`, `内页/`, and `首页及favicon_io/`.

- [ ] **Step 2: Initialize npm and install the exact tool roles**

Run `npm init -y`, `npm install astro@latest`, then `npm install -D @astrojs/check typescript vitest @playwright/test cross-env`, followed by `npx playwright install chromium`.

- [ ] **Step 3: Create project and test configuration**

Configure Astro static output, strict TypeScript, Vitest unit discovery, Playwright desktop/mobile projects, `.env.example` with empty `SITE_URL=`, and package scripts `dev`, `build`, `preview`, `typecheck`, `test`, `test:unit`, and `test:e2e`.

- [ ] **Step 4: Add the failing scaffold test**

Create `tests/unit/scaffold.test.ts` asserting that the configured locales are exactly `['en', 'pt-br', 'es', 'id']` and default locale is `en`; imports should initially fail because `src/config/site.ts` does not exist.

- [ ] **Step 5: Run the test and confirm the expected failure**

Run: `npm run test:unit -- tests/unit/scaffold.test.ts`  
Expected: FAIL because `src/config/site.ts` cannot be resolved.

- [ ] **Step 6: Implement the site configuration**

Create `src/config/site.ts` exporting `SUPPORTED_LOCALES`, `DEFAULT_LOCALE`, `Locale`, `localeToHrefLang(locale)`, and `getSiteOrigin(env)`; the last function accepts a supplied origin and rejects a missing production value.

- [ ] **Step 7: Run setup verification**

Run: `npm run test:unit -- tests/unit/scaffold.test.ts`  
Expected: PASS. Run `npx cross-env SITE_URL=https://anime-dice.test npm run build`; expected exit 0 and static `dist/` output.

- [ ] **Step 8: Commit**

Run `git add package.json package-lock.json astro.config.mjs tsconfig.json .env.example .gitignore vitest.config.ts playwright.config.ts src/config/site.ts tests/unit/scaffold.test.ts && git commit -m "chore: initialize anime dice wiki"`.

### Task 2: Model and validate the shared factual data

**Files:**
- Create: `src/data/game.ts`, `src/data/modules.ts`, `src/config/navigation.ts`, `src/lib/validation.ts`
- Create: `tests/unit/data.test.ts`

**Interfaces:**
- Consumes: supplied homepage research and eight-module JSON.
- Produces: `GameFacts`, `ExploreModule`, `NavigationItem`, `GAME_FACTS`, `EXPLORE_MODULES`, `NAV_ITEMS`, and `validateFacts()`.

- [ ] **Step 1: Write the failing data-contract tests**

Assert eight modules in the approved order, navigation counts `1,7,7,8,4,4,5,4`, two sidebar codes, ISO review date `2026-10-05`, no forbidden keyword in visible strings, and every official/external URL uses HTTPS.

- [ ] **Step 2: Run the tests and confirm failure**

Run: `npm run test:unit -- tests/unit/data.test.ts`  
Expected: FAIL because the data modules do not exist.

- [ ] **Step 3: Implement the typed fact model**

Encode only facts present in `首页基础信息.md` and `首页信息8 个模块完整数据.md`. Use conservative code rewards where supplied sources conflict, retain source references for editorial traceability, and expose no competitor URL as a navigation destination.

- [ ] **Step 4: Implement `validateFacts()`**

Validate module order/count, required fact fields, date format, HTTPS URLs, unique anchors, safe visible keywords, and unchanged code strings.

- [ ] **Step 5: Run the data tests**

Run: `npm run test:unit -- tests/unit/data.test.ts`  
Expected: PASS.

- [ ] **Step 6: Commit**

Run `git add src/data src/config/navigation.ts src/lib/validation.ts tests/unit/data.test.ts && git commit -m "feat: add verified anime dice content model"`.

### Task 3: Add complete typed translations for four locales

**Files:**
- Create: `src/i18n/types.ts`, `src/i18n/index.ts`, `src/i18n/en.ts`, `src/i18n/pt-br.ts`, `src/i18n/es.ts`, `src/i18n/id.ts`
- Create: `tests/unit/i18n.test.ts`

**Interfaces:**
- Consumes: `Locale`, `GAME_FACTS`, `EXPLORE_MODULES`, and fixed anchor IDs.
- Produces: `HomeCopy`, `getHomeCopy(locale: Locale): HomeCopy`, and `assertCompleteCopy(copy)`.

- [ ] **Step 1: Write failing translation-contract tests**

Assert all locales implement every `HomeCopy` key; titles are no more than 60 characters; descriptions are 140–160 characters; code/game names remain unchanged; FAQ question/answer counts match; no value is empty; and each non-English hero description, About paragraph, and FAQ answer differs from its English counterpart.

- [ ] **Step 2: Run tests and confirm failure**

Run: `npm run test:unit -- tests/unit/i18n.test.ts`  
Expected: FAIL because locale modules do not exist.

- [ ] **Step 3: Define the `HomeCopy` contract and lookup**

Cover metadata, navigation, hero, updates, journey, trending, about, eight modules, FAQ, CTA, sidebar, accessibility labels, and footer. `getHomeCopy()` rejects unsupported locale input rather than silently returning partial text.

- [ ] **Step 4: Author the four dictionaries**

Translate explanatory prose manually while preserving game entities and shared facts. Use natural Brazilian Portuguese, neutral international Spanish, and standard Indonesian search terminology from the approved research.

- [ ] **Step 5: Run translation tests**

Run: `npm run test:unit -- tests/unit/i18n.test.ts`  
Expected: PASS.

- [ ] **Step 6: Commit**

Run `git add src/i18n tests/unit/i18n.test.ts && git commit -m "feat: add four complete homepage locales"`.

### Task 4: Implement canonical, hreflang, and structured-data helpers

**Files:**
- Create: `src/lib/seo.ts`, `tests/unit/seo.test.ts`
- Modify: `src/config/site.ts`

**Interfaces:**
- Consumes: `Locale`, `HomeCopy`, `GAME_FACTS`, and configured site origin.
- Produces: `buildSeo(locale, origin)`, `buildAlternates(origin)`, `buildHomeJsonLd(locale, origin, copy)`, and `assertSeoConfig(origin, mode)`.

- [ ] **Step 1: Write failing SEO tests**

Assert self-canonical URLs, reciprocal alternates for four locales, `x-default` `/en/`, matching `inLanguage`, visible FAQ parity, no unfinished URLs in JSON-LD, and rejection of a missing origin in production mode.

- [ ] **Step 2: Run tests and confirm failure**

Run: `npm run test:unit -- tests/unit/seo.test.ts`  
Expected: FAIL because `src/lib/seo.ts` does not exist.

- [ ] **Step 3: Implement SEO helpers**

Return serializable values for Astro `<head>` rendering and JSON-LD. Include `WebSite`, `WebPage`, and `FAQPage`; include `BreadcrumbList` only when visible breadcrumb content exists. Do not add `VideoObject` until complete video metadata is verified.

- [ ] **Step 4: Run SEO tests**

Run: `npm run test:unit -- tests/unit/seo.test.ts`  
Expected: PASS.

- [ ] **Step 5: Commit**

Run `git add src/config/site.ts src/lib/seo.ts tests/unit/seo.test.ts && git commit -m "feat: add multilingual seo metadata"`.

### Task 5: Build the shared shell, header, hero, and sidebar

**Files:**
- Create: `src/layouts/WikiLayout.astro`, `src/pages/[locale]/index.astro`
- Create: `src/components/Header.astro`, `src/components/AdSlot.astro`, `src/components/Hero.astro`, `src/components/Sidebar.astro`
- Create: `src/styles/global.css`, `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: locale copy, fact model, navigation, and SEO helpers.
- Produces: statically generated localized homepage shell with one H1, benchmark-aligned two-column hero, accessible header controls, and sticky sidebar.

- [ ] **Step 1: Write failing shell browser tests**

For every locale, assert HTTP 200, matching `<html lang>`, one H1, localized site label, eight header destinations, Hero media dimensions, three hero actions, sidebar counts, two code cards, and review date.

- [ ] **Step 2: Run tests and confirm failure**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: FAIL because locale pages do not exist.

- [ ] **Step 3: Implement the shared layout and locale page**

Use `getStaticPaths()` for exactly four locales. Render SEO tags and JSON-LD from Task 4, include global styles once, and reject unsupported generated locales.

- [ ] **Step 4: Implement header and hero components**

Match the benchmark's roughly 60px sticky header, title/badge row, wide media, centered description, fact chips, and action row. Use semantic controls and stable same-page anchors.

- [ ] **Step 5: Implement desktop sidebar and ad slot**

Render the exact researched category counts and conservative code status. The ad slot is an accessible reserved area and contains no fake ad request.

- [ ] **Step 6: Implement foundational theme tokens and grid CSS**

Add dark/light tokens, `1280px` max width, desktop 3:1 content grid, visible focus states, minimum type sizes, and the first mobile breakpoint.

- [ ] **Step 7: Run shell tests**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: shell assertions PASS.

- [ ] **Step 8: Commit**

Run `git add src/layouts src/pages src/components src/styles tests/e2e/home.spec.ts && git commit -m "feat: build benchmark-aligned wiki shell"`.

### Task 6: Render the complete homepage content

**Files:**
- Create: `src/components/LatestUpdates.astro`, `src/components/Journey.astro`, `src/components/Trending.astro`, `src/components/AboutGame.astro`
- Create: `src/components/ExploreModules.astro`, `src/components/Faq.astro`, `src/components/FinalCta.astro`, `src/components/Footer.astro`
- Modify: `src/pages/[locale]/index.astro`, `src/styles/global.css`, `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: `HomeCopy`, `GAME_FACTS`, `EXPLORE_MODULES`, and stable navigation anchors.
- Produces: the complete section order and localized visible content required by the spec.

- [ ] **Step 1: Extend browser tests for complete content**

Assert the exact H2 order; four Journey cards; eight Explore modules in approved order and display type; localized About facts; FAQ count; official Roblox CTA; fan-site disclaimer; and absence of `href` values for unfinished article routes.

- [ ] **Step 2: Run the expanded test and confirm failure**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: FAIL on the first missing content section.

- [ ] **Step 3: Implement updates, journey, trending, and about components**

Render compact benchmark-style cards, dated update facts, safe trending topics, and the dated game-data snapshot. All section IDs must match navigation helpers.

- [ ] **Step 4: Implement the eight module display variants**

`ExploreModules.astro` renders `code-cards`, `step-by-step`, `tier-grid`, and `card-list` from the typed module record without duplicating factual values into locale files.

- [ ] **Step 5: Implement FAQ, CTA, and footer**

Use native `<details>` FAQ items, official Roblox/Discord destinations only where verified, the third-party video label, and no nonexistent privacy, terms, or inner-page link.

- [ ] **Step 6: Finish section styling**

Match benchmark density, border treatment, card rhythm, and responsive stacking while preserving the Anime Dice violet/cyan/gold visual system.

- [ ] **Step 7: Run complete-content tests**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: PASS for all four locales.

- [ ] **Step 8: Commit**

Run `git add src/components src/pages/[locale]/index.astro src/styles/global.css tests/e2e/home.spec.ts && git commit -m "feat: complete multilingual homepage content"`.

### Task 7: Add assets, theme, menus, and root language gateway

**Files:**
- Create: `src/pages/index.astro`, `src/scripts/theme.ts`, `src/scripts/menu.ts`, `src/scripts/locale-gateway.ts`
- Create: `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, `public/apple-touch-icon.png`, `public/assets/anime-dice-hero.jpg`
- Modify: `src/components/Header.astro`, `src/layouts/WikiLayout.astro`, `src/styles/global.css`, `tests/e2e/home.spec.ts`

**Interfaces:**
- Consumes: supplied favicon archive, verified Roblox image URL, locale routes, and header controls.
- Produces: local branded assets, persisted theme, accessible mobile menu, and safe preferred-language routing.

- [ ] **Step 1: Inspect and import the supplied favicon archive**

List the archive before extraction, reject unexpected traversal paths, then copy only the expected favicon files into `public/`.

- [ ] **Step 2: Download and verify the official Roblox hero image**

Save the supplied `tr.rbxcdn.com` image locally, verify image decoding and dimensions, and record its official source in `src/data/game.ts`.

- [ ] **Step 3: Add failing interaction and responsive tests**

Assert theme persistence, menu `aria-expanded`, keyboard navigation, root fallback for unsupported locale, explicit-choice preservation, visible locale links without JavaScript, and no horizontal overflow at 375px for all locales.

- [ ] **Step 4: Run interaction tests and confirm failure**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: FAIL on missing root gateway or interactions.

- [ ] **Step 5: Implement theme and mobile menu scripts**

Apply the saved theme before first paint, default to dark when no choice exists, update control state, close the mobile menu after anchor navigation, and respect reduced motion.

- [ ] **Step 6: Implement the root language gateway**

Render crawlable links to all four locales. Route only when no saved choice exists; map `pt-*` to `pt-br`, `es-*` to `es`, `id-*` to `id`, and all others to `en`.

- [ ] **Step 7: Complete responsive CSS**

Prevent long localized labels from clipping, move the sidebar after main content below the desktop breakpoint, and verify 200% zoom remains usable.

- [ ] **Step 8: Run interaction tests**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/home.spec.ts`  
Expected: PASS in desktop and mobile projects.

- [ ] **Step 9: Commit**

Run `git add public src/pages/index.astro src/scripts src/components/Header.astro src/layouts/WikiLayout.astro src/styles/global.css tests/e2e/home.spec.ts && git commit -m "feat: add responsive navigation and local assets"`.

### Task 8: Add crawl files and run final verification

**Files:**
- Create: `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`, `tests/e2e/seo.spec.ts`
- Modify: `package.json`, `src/layouts/WikiLayout.astro`, `src/lib/seo.ts`

**Interfaces:**
- Consumes: the four generated routes, configured origin, visible FAQ, and SEO helpers.
- Produces: exact four-locale sitemap, crawl policy, metadata validation, internal-link crawl, and final release evidence.

- [ ] **Step 1: Write failing crawl and SEO browser tests**

Assert four sitemap URLs only; robots points to the configured sitemap; every locale has correct canonical, reciprocal alternates, one H1, matching FAQ JSON-LD, valid local image references, and no unfinished route. Crawl every internal link and require a non-error response.

- [ ] **Step 2: Run the tests and confirm failure**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run test:e2e -- tests/e2e/seo.spec.ts`  
Expected: FAIL because sitemap and robots output are incomplete.

- [ ] **Step 3: Implement sitemap and crawl controls**

Generate both endpoints from `SUPPORTED_LOCALES` and the configured origin. `robots.txt` must point to the sitemap on that same validated origin.

- [ ] **Step 4: Add a single release-check script**

Add `npm run check` to run type checking, unit tests, production build with an explicit origin, and Playwright tests in that order.

- [ ] **Step 5: Run all automated verification**

Run: `npx cross-env SITE_URL=https://anime-dice.test npm run check`  
Expected: every command exits 0; sitemap contains exactly four localized home URLs; internal crawl reports zero failures.

- [ ] **Step 6: Perform visual verification against the benchmark**

Capture desktop 1440×1000 and mobile 375×812 screenshots for `/en/`, then inspect Portuguese, Spanish, and Indonesian at mobile width. Verify section order, desktop proportions, sticky header/sidebar, long-label wrapping, both themes, and absence of horizontal overflow.

- [ ] **Step 7: Run the content-integrity scan**

Search rendered `dist/` for `TODO`, `TBD`, benchmark branding, forbidden exploit terms, empty attributes, external competitor image URLs, and unfinished page slugs. Expected: no actionable match.

- [ ] **Step 8: Commit**

Run `git add src/pages/robots.txt.ts src/pages/sitemap.xml.ts src/layouts/WikiLayout.astro src/lib/seo.ts tests/e2e/seo.spec.ts package.json package-lock.json && git commit -m "test: verify multilingual homepage release"`.

## Completion Gate

Do not claim completion until `npm run check` passes, final screenshots are visually inspected, all four locales are reviewed for overflow and factual parity, and `git status --short` shows only intentional files.
