# Anime Dice Complete Multilingual Wiki Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the approved homepage into a source-constrained Anime Dice wiki with 8 categories, 40 articles, and complete English, Brazilian Portuguese, Spanish, and Indonesian routes.

**Architecture:** A language-neutral catalog owns article identity, routing, dates, sources, and factual relationships. Typed locale modules own all visitor-facing prose, while shared Astro category and article templates generate every route and shared SEO helpers derive canonical, hreflang, JSON-LD, and sitemap output from the same validated catalog.

**Tech Stack:** Astro 7, TypeScript 6, CSS, Vitest 5, Playwright 1.64, npm

**Spec:** `docs/superpowers/specs/2026-10-10-anime-dice-complete-multilingual-wiki-design.md`

## Global Constraints

- Production origin is exactly `https://animedicegamei.wiki`; production builds fail without `SITE_URL`.
- Locales are exactly `en`, `pt-br`, `es`, and `id`; x-default points to the English equivalent.
- The catalog contains exactly 8 categories and 40 unique articles with counts `1,7,7,8,4,4,5,4`.
- The primary sitemap contains exactly 196 URLs: 4 homepages, 32 category hubs, and 160 articles.
- Facts come only from supplied research, official Roblox/developer links, verified Discord, or sources cited by the supplied research.
- Keep `Anime Dice`, code strings, and actual in-game entity names unchanged across locales.
- No scripts, exploits, hacks, keyless tools, injection, autofarm, copied competitor prose/assets, or invented facts.
- Development may create local commits but must not push, create a PR, deploy, change DNS, or submit Search Console before final user approval.
- Default theme remains dark; both themes meet contrast requirements and pages remain usable at 200% zoom.
- Every advertised internal route exists and every localized article contains manually authored prose rather than paragraph-level English fallback.

## Review Focus

- Duplicate or normalized-colliding article slugs must fail validation before build — covered by Task 1 tests.
- A related-article reference crossing to a missing or untranslated article must fail rather than render a broken link — covered by Tasks 1 and 8.
- Very long Portuguese and Spanish article titles and table cells must wrap without viewport overflow — covered by Tasks 8 and 11.
- Unknown saved locale/category/slug input must land on the not-found experience or English gateway, never guessed content — covered by Tasks 9 and 11.
- Adding a future article without sources, review date, metadata, FAQ parity, or all four locale copies must fail release checks — covered by Tasks 1, 7, 10, and 11.

---

## File Structure

- Catalog and contracts: `src/content/types.ts`, `src/data/categories.ts`, `src/data/articles.ts`, `src/lib/content-validation.ts`
- Routing: `src/lib/routes.ts`
- Localized content: `src/i18n/categories/{en,pt-br,es,id}.ts`, `src/i18n/articles/{en,pt-br,es,id}.ts`, `src/i18n/legal/{en,pt-br,es,id}.ts`, `src/i18n/content.ts`
- Shared pages: `src/pages/[locale]/[category]/index.astro`, `src/pages/[locale]/[category]/[slug].astro`, `src/pages/[locale]/privacy.astro`, `src/pages/[locale]/terms.astro`, `src/pages/404.astro`
- Components: `src/components/Breadcrumbs.astro`, `CategoryCard.astro`, `TableOfContents.astro`, `ArticleBody.astro`, `SourceNote.astro`, `RelatedGuides.astro`, `ArticleFaq.astro`
- Existing integration points: `src/components/{Header,Sidebar,ExploreModules,Footer}.astro`, `src/layouts/WikiLayout.astro`, `src/lib/seo.ts`, `src/pages/sitemap.xml.ts`, `src/styles/global.css`
- Tests: `tests/unit/{catalog,content-copy,routes,page-seo}.test.ts`, `tests/e2e/{categories,articles,sitewide}.spec.ts`

### Task 1: Define the content catalog, route helpers, and validation contract

**Files:**
- Create: `src/content/types.ts`
- Create: `src/data/categories.ts`
- Create: `src/data/articles.ts`
- Create: `src/lib/content-validation.ts`
- Create: `src/lib/routes.ts`
- Create: `tests/unit/catalog.test.ts`
- Create: `tests/unit/routes.test.ts`
- Modify: `src/config/navigation.ts`

**Interfaces:**
- Produces: `CategoryId`, `ArticleId`, `ContentBlock`, `ArticleSection`, `ArticleRecord`, `LocalizedArticle`, `CATEGORIES`, `ARTICLES`, `validateContentCatalog()`, `getCategoryPath(locale, category)`, `getArticlePath(locale, article)`, and `getEquivalentPath(locale, page)`.
- Consumes: `SUPPORTED_LOCALES`, `Locale`, and the exact keyword/category inventory in `内页/keywords.json`.

- [ ] **Step 1: Write failing catalog and route tests**

Assert 8 category IDs in approved order, exact counts `1,7,7,8,4,4,5,4`, 40 unique article IDs/slugs/keywords, ISO review dates, nonempty HTTPS source arrays, valid related IDs, ASCII slugs, and localized path output. Add collision cases for case folding and duplicate slashes.

- [ ] **Step 2: Run tests and verify the expected failure**

Run: `npm run test:unit -- tests/unit/catalog.test.ts tests/unit/routes.test.ts`  
Expected: FAIL because catalog and route modules do not exist.

- [ ] **Step 3: Implement the types and 40-record catalog skeleton**

Define `ContentBlock` as a discriminated union for paragraph, ordered/unordered list, table, and confirmed/volatile/unverified callout blocks. Populate article identity, category, keyword, slug, review date, source URLs, and related IDs without article prose.

- [ ] **Step 4: Implement strict validation and route helpers**

`validateContentCatalog()` rejects count drift, duplicate normalized slugs, missing sources, invalid dates, orphan related IDs, self-related IDs, mismatched category membership, and unsafe keyword intent. Route helpers emit trailing-slash localized URLs only.

- [ ] **Step 5: Run tests and verify they pass**

Run: `npm run test:unit -- tests/unit/catalog.test.ts tests/unit/routes.test.ts`  
Expected: PASS.

- [ ] **Step 6: Commit**

Run: `git add src/content src/data/categories.ts src/data/articles.ts src/lib/content-validation.ts src/lib/routes.ts src/config/navigation.ts tests/unit/catalog.test.ts tests/unit/routes.test.ts && git commit -m "feat: add article catalog and route contracts"`.

### Task 2: Author English Codes and Guide content

**Files:**
- Create: `src/i18n/categories/en.ts`
- Create: `src/i18n/articles/en.ts`
- Create: `src/i18n/content.ts`
- Create: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: `ArticleId`, `CategoryId`, `LocalizedArticle`, and the eight Codes/Guide records from Task 1.
- Produces: `EN_CATEGORY_COPY`, partial `EN_ARTICLE_COPY`, `getCategoryCopy(locale, id)`, `getArticleCopy(locale, id)`, and `validateLocalizedContent()`.

- [ ] **Step 1: Write failing English copy tests**

Assert complete English category metadata, eight Codes/Guide article copies, unique titles/descriptions, at least three substantive sections per article, at least two FAQ entries, matching section IDs, no forbidden intent, no empty blocks, and unchanged game/code/entity strings.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English Codes and Guide"`  
Expected: FAIL because English content modules do not exist.

- [ ] **Step 3: Implement category copy and the eight article copies**

Use only supplied research and cited sources. Codes uses conservative dated status. Guide pages distinguish guide, tips, auto roll, auto sell, leveling, cutscene controls, and group joining without repeating one generic article.

- [ ] **Step 4: Implement localized lookup and partial-phase validation**

Expose exact lookup signatures; test helpers may validate a supplied subset, while the release validator introduced in Task 7 requires all 40 IDs.

- [ ] **Step 5: Run focused tests and commit**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English Codes and Guide"`  
Expected: PASS.  
Commit: `git add src/i18n/categories/en.ts src/i18n/articles/en.ts src/i18n/content.ts tests/unit/content-copy.test.ts && git commit -m "feat: add English codes and guide articles"`.

### Task 3: Author English Units and Progression content

**Files:**
- Modify: `src/i18n/articles/en.ts`
- Modify: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: the 15 Units/Progression records and shared source-constrained fact model.
- Produces: English copies for tier list, units, traits, mutation, rarity, grades, max level, luck, max luck, gems, jackpot roll, lucky spin, rebirth, max rebirth, and quest shop.

- [ ] **Step 1: Add failing tests for the 15 intents**

Assert distinct intent phrases, documented dice/trait/grade tables where supported, uncertainty callouts for mutation/max-level/max-rebirth claims, and no unsupported combat or probability claims.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English Units and Progression"`  
Expected: FAIL on missing article IDs.

- [ ] **Step 3: Author the 15 articles**

Reuse factual values through typed tables or shared constants where values repeat; keep article framing, sections, and FAQs unique to each search intent.

- [ ] **Step 4: Run focused tests and commit**

Run the same focused test; expected PASS.  
Commit: `git add src/i18n/articles/en.ts tests/unit/content-copy.test.ts && git commit -m "feat: add English units and progression articles"`.

### Task 4: Author English Tower and Trading content

**Files:**
- Modify: `src/i18n/articles/en.ts`
- Modify: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: eight Tower/Trading records, gear/tower sources, and the no-fabricated-market-data rule.
- Produces: English tower, gear, potion, tickets, trading, trade value, value calculator, and market articles.

- [ ] **Step 1: Add failing tests for Tower and Trading**

Assert documented tower/gear facts, visible review notes, no invented live price/value dataset, no functional calculator claim, and safe-trading guidance.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English Tower and Trading"`  
Expected: FAIL on missing article IDs.

- [ ] **Step 3: Author the eight articles**

Present calculator intent as a transparent evaluation worksheet based on verified attributes, not fabricated prices. Label volatile trading state and direct users to verified official destinations.

- [ ] **Step 4: Run focused tests and commit**

Expected: PASS.  
Commit: `git add src/i18n/articles/en.ts tests/unit/content-copy.test.ts && git commit -m "feat: add English tower and trading articles"`.

### Task 5: Author English Updates and Community content

**Files:**
- Modify: `src/i18n/articles/en.ts`
- Modify: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: nine Updates/Community records and official Roblox/group/Discord facts.
- Produces: English new update, next update, update 7, event, admin abuse time, Discord, Reddit, Trello, and group articles.

- [ ] **Step 1: Add failing tests for volatile and unverified topics**

Assert no predicted future date, no fabricated event/admin schedule, Update 7 wording only where sourced, verified official links only, and explicit “not verified” handling for Reddit/Trello when applicable.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English Updates and Community"`  
Expected: FAIL on missing article IDs.

- [ ] **Step 3: Author the nine articles**

Make status pages useful through verification instructions, current confirmed facts, safety notes, and dated review context rather than invented answers.

- [ ] **Step 4: Run the complete English contract and commit**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "English"`  
Expected: all 40 English articles PASS.  
Commit: `git add src/i18n/articles/en.ts tests/unit/content-copy.test.ts && git commit -m "feat: complete English article library"`.

### Task 6: Add Brazilian Portuguese article and category copy

**Files:**
- Create: `src/i18n/categories/pt-br.ts`
- Create: `src/i18n/articles/pt-br.ts`
- Modify: `src/i18n/content.ts`
- Modify: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: complete English intent/fact structure and all 40 article IDs.
- Produces: `PT_BR_CATEGORY_COPY` and `PT_BR_ARTICLE_COPY` with complete natural Brazilian Portuguese prose.

- [ ] **Step 1: Add failing locale-contract tests**

Assert all IDs exist, structure and factual tokens match English, prose differs from English, titles/descriptions are unique, game entities remain unchanged, and no Spanish/Indonesian locale leakage appears.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts -t "Portuguese"`  
Expected: FAIL because Portuguese article modules do not exist.

- [ ] **Step 3: Author all category and article copy**

Translate intent naturally, preserve facts and named entities, and use Brazilian Roblox terminology consistently.

- [ ] **Step 4: Run locale tests and commit**

Expected: PASS.  
Commit: `git add src/i18n/categories/pt-br.ts src/i18n/articles/pt-br.ts src/i18n/content.ts tests/unit/content-copy.test.ts && git commit -m "feat: add Brazilian Portuguese article library"`.

### Task 7: Add Spanish and Indonesian copy and enforce the release contract

**Files:**
- Create: `src/i18n/categories/es.ts`
- Create: `src/i18n/categories/id.ts`
- Create: `src/i18n/articles/es.ts`
- Create: `src/i18n/articles/id.ts`
- Modify: `src/i18n/content.ts`
- Modify: `src/lib/content-validation.ts`
- Modify: `tests/unit/content-copy.test.ts`

**Interfaces:**
- Consumes: all 40 IDs and the English/PT-BR structural contract.
- Produces: complete Spanish and Indonesian libraries and `validateReleaseContent()`.

- [ ] **Step 1: Add failing Spanish, Indonesian, and release tests**

Assert every locale has 8 categories and 40 articles, identical factual tokens and table dimensions, natural non-English prose, no empty blocks, FAQ parity, and no English paragraph fallback.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/content-copy.test.ts`  
Expected: FAIL on missing locale modules and release validator.

- [ ] **Step 3: Author Spanish content**

Use neutral international Spanish, preserve Anime Dice entities, and keep long labels readable.

- [ ] **Step 4: Author Indonesian content**

Use standard Indonesian Roblox/search terminology and preserve entity names.

- [ ] **Step 5: Implement and run the full release validator**

`validateReleaseContent()` checks all four locales, all 40 IDs, matching section/FAQ/table structure, metadata uniqueness inside each locale, and related-link translation coverage.  
Run the full unit file; expected PASS.

- [ ] **Step 6: Commit**

Run: `git add src/i18n/categories src/i18n/articles src/i18n/content.ts src/lib/content-validation.ts tests/unit/content-copy.test.ts && git commit -m "feat: complete four-language article content"`.

### Task 8: Build category hubs and article templates

**Files:**
- Create: `src/components/Breadcrumbs.astro`
- Create: `src/components/CategoryCard.astro`
- Create: `src/components/TableOfContents.astro`
- Create: `src/components/ArticleBody.astro`
- Create: `src/components/SourceNote.astro`
- Create: `src/components/RelatedGuides.astro`
- Create: `src/components/ArticleFaq.astro`
- Create: `src/pages/[locale]/[category]/index.astro`
- Create: `src/pages/[locale]/[category]/[slug].astro`
- Create: `tests/e2e/categories.spec.ts`
- Create: `tests/e2e/articles.spec.ts`
- Modify: `src/layouts/WikiLayout.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: validated catalog, localized copy, route helpers, existing Header/Sidebar/Footer, and block union.
- Produces: 32 category pages and 160 article pages with breadcrumbs, TOC, content blocks, source notes, FAQs, related guides, and locale-equivalent switching.

- [ ] **Step 1: Write failing browser tests**

For every locale and category assert 200, one H1, exact card count, sidebar counts, and valid links. For representative articles of every block type assert breadcrumb, review date, TOC targets, table/list/callout rendering, FAQ, related links, and language switch equivalents.

- [ ] **Step 2: Run and confirm failure**

Run: `npx cross-env SITE_URL=https://animedicegamei.wiki npm run test:e2e -- tests/e2e/categories.spec.ts tests/e2e/articles.spec.ts`  
Expected: FAIL because routes do not exist.

- [ ] **Step 3: Implement shared components**

Components consume typed records only; they do not contain article facts. TOC IDs derive from validated section IDs. Tables use scroll containers and semantic headers.

- [ ] **Step 4: Implement static category and article routes**

`getStaticPaths()` enumerates only validated locale/category/article combinations. Invalid combinations have no generated output.

- [ ] **Step 5: Add responsive long-form styles**

Use readable measure, desktop two-column shell, mobile sidebar ordering, wrapping titles, and overflow-safe tables.

- [ ] **Step 6: Run tests and commit**

Expected: category and article suites PASS.  
Commit: `git add src/components src/pages/[locale]/[category] src/layouts/WikiLayout.astro src/styles/global.css tests/e2e/categories.spec.ts tests/e2e/articles.spec.ts && git commit -m "feat: add multilingual category and article pages"`.

### Task 9: Integrate navigation, legal pages, gateway behavior, and 404

**Files:**
- Create: `src/i18n/legal/en.ts`, `pt-br.ts`, `es.ts`, `id.ts`
- Create: `src/pages/[locale]/privacy.astro`
- Create: `src/pages/[locale]/terms.astro`
- Create: `src/pages/404.astro`
- Modify: `src/components/Header.astro`
- Modify: `src/components/Sidebar.astro`
- Modify: `src/components/ExploreModules.astro`
- Modify: `src/components/Footer.astro`
- Modify: `src/pages/index.astro`
- Create: `tests/e2e/sitewide.spec.ts`

**Interfaces:**
- Consumes: route helpers, category catalog, locale persistence, and actual static-site behavior.
- Produces: real localized navigation, legal routes, not-found recovery, and safe root locale handling.

- [ ] **Step 1: Write failing navigation/legal/404 tests**

Assert homepage modules and header categories use real localized routes, footer legal links resolve, legal text does not claim nonexistent tracking/ads/accounts, corrupt saved locale falls back to English, and unknown URLs expose recovery links without indexable fake content.

- [ ] **Step 2: Run and confirm failure**

Run: `npx cross-env SITE_URL=https://animedicegamei.wiki npm run test:e2e -- tests/e2e/sitewide.spec.ts`  
Expected: FAIL on anchor navigation and missing support pages.

- [ ] **Step 3: Replace homepage anchors with route-helper links**

Preserve section IDs where useful, but primary navigation and module CTAs point to category or article pages.

- [ ] **Step 4: Implement factual legal copy and not-found recovery**

Describe only current static behavior and link all locale homepages from 404.

- [ ] **Step 5: Run tests and commit**

Expected: PASS.  
Commit: `git add src/i18n/legal src/pages src/components tests/e2e/sitewide.spec.ts && git commit -m "feat: connect complete wiki navigation and support pages"`.

### Task 10: Add route-aware metadata, structured data, and crawl output

**Files:**
- Modify: `src/lib/seo.ts`
- Create: `tests/unit/page-seo.test.ts`
- Modify: `src/layouts/WikiLayout.astro`
- Modify: `src/pages/sitemap.xml.ts`
- Modify: `src/pages/robots.txt.ts`
- Modify: `tests/e2e/seo.spec.ts`

**Interfaces:**
- Consumes: route helpers, validated catalog, localized metadata/FAQ, and production origin.
- Produces: `buildPageSeo(page, locale, origin)`, `buildPageJsonLd(page, locale, origin)`, and `getIndexableRoutes()`.

- [ ] **Step 1: Write failing SEO unit and browser tests**

Assert unique metadata, self-canonical URLs, reciprocal equivalents, x-default, correct CollectionPage/Article/BreadcrumbList/FAQPage shapes, visible FAQ parity, dateModified from review dates, and exactly 196 primary sitemap URLs.

- [ ] **Step 2: Run and confirm failure**

Run: `npm run test:unit -- tests/unit/page-seo.test.ts` and the SEO browser suite.  
Expected: FAIL because current helpers are homepage-only.

- [ ] **Step 3: Implement discriminated page SEO helpers**

Support home, category, article, and legal page descriptors. Derive alternate paths from stable IDs, never from translated titles.

- [ ] **Step 4: Generate sitemap and robots from validated routes**

Exclude root gateway, 404, and any page marked non-indexable. Keep robots sitemap origin identical to canonical origin.

- [ ] **Step 5: Run SEO tests and commit**

Expected: PASS with 196 primary URLs.  
Commit: `git add src/lib/seo.ts src/layouts/WikiLayout.astro src/pages/sitemap.xml.ts src/pages/robots.txt.ts tests/unit/page-seo.test.ts tests/e2e/seo.spec.ts && git commit -m "feat: add complete wiki seo graph"`.

### Task 11: Complete accessibility, responsive behavior, and release verification

**Files:**
- Modify: `src/styles/global.css`
- Modify: `tests/e2e/categories.spec.ts`
- Modify: `tests/e2e/articles.spec.ts`
- Modify: `tests/e2e/sitewide.spec.ts`
- Modify: `package.json`
- Create: `tests/unit/release-integrity.test.ts`

**Interfaces:**
- Consumes: every generated route and all release validators.
- Produces: one release command that proves content, routes, SEO, responsive behavior, and source integrity before deployment approval.

- [ ] **Step 1: Add failing release-integrity tests**

Assert 8/40/4/196 counts, no duplicate metadata/H1 intent, no forbidden terms, no placeholders, no external competitor media, complete sources/review dates, valid related links, and no untranslated paragraph fallback.

- [ ] **Step 2: Add browser coverage for difficult layouts**

Test longest Portuguese/Spanish titles, widest tables, 375px viewport, 200% zoom, both themes, keyboard menu/TOC/FAQ use, reduced motion, and no horizontal overflow.

- [ ] **Step 3: Run focused tests and fix only observed failures**

Run unit integrity and the three e2e files. Expected: PASS after CSS or component corrections.

- [ ] **Step 4: Run the full production gate**

Run: `npx cross-env SITE_URL=https://animedicegamei.wiki npm run check`  
Expected: Astro typecheck 0 errors/warnings, all unit tests PASS, production build PASS, and all Playwright tests PASS.

- [ ] **Step 5: Inspect generated route and content output**

Confirm 196 primary SEO pages, localized legal/support routes, no broken internal links, and no actionable matches for `TODO|TBD|PLACEHOLDER|rideapetwiki|script keyless|autofarm` in rendered output.

- [ ] **Step 6: Perform visual review**

Inspect desktop and mobile screenshots for one homepage, every category template state, representative prose/list/table/callout articles, and legal pages in all four locales. Compare structure and density with the benchmark without copying its branding.

- [ ] **Step 7: Run final independent review and address findings**

Review the whole branch for spec coverage, source integrity, localization completeness, SEO correctness, accessibility, and accidental deployment/push changes. Re-run the full gate after fixes.

- [ ] **Step 8: Commit final release checks**

Run: `git add package.json package-lock.json src/styles/global.css tests && git commit -m "test: verify complete multilingual wiki"`.

## Completion Gate

Do not claim the site is complete until the production gate passes from a clean build, the 196-route crawl has zero failures, representative pages in all four locales are visually inspected, the independent review is resolved, and `git status --short` contains only intentional files. Do not push or deploy; return the local commit and verification evidence to the user for final approval.
