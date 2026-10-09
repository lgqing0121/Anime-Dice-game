# Anime Dice Multilingual Homepage Design

**Date:** 2026-10-09  
**Status:** Approved in conversation; awaiting written-spec review  
**Scope:** Four-language homepage first; inner pages follow after homepage acceptance.

## Objective

Build a search-focused fan-made Anime Dice wiki homepage that follows the information architecture, content density, responsive behavior, and two-column rhythm of `https://rideapetwiki.wiki/en` without copying its branding, text, or protected media.

The first release serves English at `/en/`, Brazilian Portuguese at `/pt-br/`, Spanish at `/es/`, and Indonesian at `/id/`. The homepage must be complete on its own and must not link visitors or crawlers to unfinished pages.

Success means every locale is complete, desktop and mobile structure match the benchmark, claims are sourced, volatile facts have review dates, internal links do not return 404, SEO metadata matches rendered routes, and the production build is accessible and stable.

## Delivery Sequence

Phase 1 implements the four homepages, shared layout, local assets, theme switching, SEO infrastructure, and root language routing. Phase 2 develops inner pages category by category after homepage approval. Homepage anchors become real localized routes only when the destination exists and passes factual and SEO checks.

## Technical Architecture

Use Astro with TypeScript and static output. Separate facts, translations, presentation, and routes:

- `src/data/game.ts`: language-neutral facts, dates, URLs, codes, stats, modules, and references.
- `src/i18n/<locale>.ts`: localized visible copy.
- `src/config/site.ts`: locales, default locale, site origin, metadata, and route helpers.
- `src/layouts/WikiLayout.astro`: document metadata and shared page shell.
- `src/components/`: focused homepage sections and reusable primitives.
- `src/pages/<locale>/index.astro`: generated locale homepages.
- `src/pages/index.astro`: language gateway with visible locale links.
- `public/`: supplied favicons and locally stored verified imagery.

The production domain comes from one site-origin setting. Development must not invent a domain. Deployment-oriented validation must fail clearly when the real origin is missing.

## Routes and Languages

The four locale routes are permanent and lowercase. English remains explicit at `/en/`. The root exposes visible links to all locales and may progressively route a human visitor to a supported preferred language when no choice exists. It must not hide crawlable links or override an explicit choice.

The language switcher only links to equivalent existing pages. Game-specific strings remain unchanged when translation would make them inaccurate, including `Anime Dice`, codes, `UPDATE7`, `Lucky Spins`, `Trait Rerolls`, `Gems`, `Tickets`, and actual in-game names.

## Homepage Structure

The fixed order is Header, advertising slot, Hero with desktop sidebar, Latest Updates, Journey, Trending Now, About, eight Explore modules, FAQ, final CTA, and Footer.

### Header and Hero

The sticky header contains the Anime Dice mark, site name, Codes, Guide, Units, Progression, Tower, Trading, Updates, Community, language switcher, and theme control. Until inner pages exist, category links target stable homepage anchors. Mobile uses an accessible disclosure menu.

The hero places the title beside an independent-community label, followed by the locally stored verified Roblox image. The supplied video is labeled as a third-party guide, never an official trailer. Under it are the gameplay description, dated fact chips, and actions for beginner guide, dice and Luck, and active codes. Phase 1 actions scroll to sections.

### Sidebar and Content Sections

The sidebar contains Wiki Navigation with the researched content counts: Codes 1, Guide 7, Units 7, Progression 8, Tower 4, Trading 4, Updates 5, and Community 4. It also shows two conservative sourced Active Codes and `Last checked: Oct 5, 2026`. It is sticky on desktop and moves below the main content on smaller screens.

Latest Updates uses compact cards backed by supplied research. Journey has four cards: Beginner Guide; Dice and Luck; Characters, Traits, and Mutations; Rebirths and Tower Builds. Trending topics come from supplied search and video research, excluding cheat, exploit, injection, script, keyless, and autofarm intent. About explains the roll, place, earn, and upgrade loop and labels volatile metrics as a dated snapshot.

### Explore Modules

Use the supplied data in this order:

1. Anime Dice Codes — code cards
2. Anime Dice Beginner Guide — step-by-step
3. Anime Dice Tier List — tier grid
4. Anime Dice Dice List — card list
5. Anime Dice Traits Guide — card list
6. Anime Dice Rebirth Guide — step-by-step
7. Anime Dice Gears Guide — card list
8. Anime Dice Towers Guide — step-by-step

References remain in the editorial data model. They are not automatically exposed as competitor-style outbound links.

### FAQ, CTA, and Footer

The FAQ covers only evidence-supported questions, and visible answers exactly match `FAQPage` JSON-LD. The final CTA links to the beginner section and official Roblox page. The footer includes the fan-site disclaimer, verified official links, clearly labeled third-party guide, locales, and category anchors. Privacy or terms links appear only when real pages exist.

## Visual System

The page uses the benchmark's proportions with an original Anime Dice identity.

### Layout

- Maximum content width near `1280px`
- Sticky header height near `60px`
- Desktop primary column near three quarters and sidebar near one quarter
- Wide landscape hero media
- Thin card borders, restrained radius, and compact vertical rhythm
- Mobile single column with sidebar content after main content and no horizontal overflow

### Theme

Dark mode is the default: deep navy-black background, near-white text, dark navy cards, Galactic Violet primary, Electric Cyan secondary, Gold rewards, and Green verified-active states. Violet and cyan remain accents rather than full-page fills.

A light theme uses pale blue-gray surfaces with equivalent contrast. The theme control occupies the benchmark-equivalent header position and persists an explicit choice.

### Typography and Motion

Use a system sans-serif stack for fast, language-safe rendering. Body text is at least `16px`; controls and recurring labels are at least `14px`. Motion is limited to menu, card, disclosure, and button states. `prefers-reduced-motion` removes nonessential transitions.

## Content Integrity Rules

The supplied files are the initial source of truth. Implementation may normalize formatting but must not invent facts.

1. Never imply affiliation with Roblox Corporation or More & More Games.
2. Distinguish official links from third-party videos or reporting.
3. Keep review dates on codes and volatile stats.
4. When sources disagree, use the conservative statement or omit the disputed detail.
5. Never turn an unverified reward, update date, code status, or statistic into a firm claim.
6. Exclude unrelated `anime dice` meanings and all cheating or exploit intent.
7. Translate prose manually; share factual records so values cannot drift by locale.
8. Do not expose broken, inaccessible, or disallowed source links.

## SEO Design

### Page Metadata

Every locale has an original localized title and description. Titles remain under 60 characters where practical; descriptions target 140–160 characters without stuffing.

Each homepage includes a self-canonical, Open Graph locale/title/description/type/URL/image fields, X/Twitter summary metadata, matching `<html lang>`, reciprocal `hreflang` links for `en`, `pt-BR`, `es`, and `id`, and `x-default` pointing to `/en/`.

### Structured Data

Use JSON-LD for `WebSite`, `WebPage`, `FAQPage`, and `BreadcrumbList` when visible navigation matches. Add `VideoObject` only when title, thumbnail, upload information, embed URL, and attribution are verified. Structured data cannot contain invisible content.

### Crawl Control

Phase 1 `sitemap.xml` lists only the four localized homepages. `robots.txt` allows the site and points to the configured sitemap. Navigation, JSON-LD, and the sitemap do not advertise unfinished routes.

### Headings and Internal Links

Each page has one H1. Major sections use H2 and items use H3 without skipping levels for styling. Descriptive homepage anchors provide the initial internal navigation graph and become real localized routes only after those pages ship.

## Asset Handling

Use the favicon package in `首页及favicon_io/favicon_io.zip`. Inspect its contents before extraction and preserve valid supplied formats.

Download the verified Roblox 500×280 official image into the project during implementation and create only technically necessary local derivatives. Do not hotlink competitor assets.

All images have explicit dimensions, useful alt text, and responsive sizing. The hero image loads eagerly with appropriate priority; below-the-fold images load lazily. The final build contains no unresolved placeholders.

## Accessibility and Failure Behavior

- Navigation and disclosures are keyboard operable.
- Focus indicators remain visible in both themes.
- The mobile menu reports expanded state.
- Theme and language controls have accessible names.
- Color is not the sole code-status or rarity indicator.
- Text remains usable at 200% enlargement.
- Missing optional media falls back to text without collapsing layout.
- Missing locale dictionaries, required facts, or invalid internal targets fail validation instead of rendering invented text.
- A missing production origin blocks deployment-oriented SEO validation with a direct configuration message.

## Verification Plan

Before homepage delivery:

1. Run the production build successfully.
2. Confirm `/`, `/en/`, `/pt-br/`, `/es/`, and `/id/` resolve as designed.
3. Crawl rendered internal links and confirm zero 404 responses.
4. Verify reciprocal canonical and `hreflang` values.
5. Verify sitemap URLs exactly match existing indexable pages.
6. Parse JSON-LD and compare FAQ data with visible content.
7. Check localized title and description lengths.
8. Render desktop and mobile screenshots and compare order, proportions, header behavior, sidebar placement, and density with the benchmark.
9. Test both themes, language switching, mobile menu, keyboard navigation, reduced motion, and 200% zoom.
10. Check horizontal overflow and media layout shift.
11. Scan for unfinished placeholders, invented claims, forbidden exploit keywords, broken source links, and competitor branding.

## Explicit Non-Goals for Phase 1

- No inner article pages
- No fake article URLs
- No live Roblox API integration
- No search, accounts, comments, or community submissions
- No automatic machine-translation service
- No copied competitor text or imagery
- No cheat, script, exploit, or autofarm content
- No deployment until a real production origin and hosting destination are known

## Approved Direction

The approved direction is a structure-level complete benchmark: reproduce the benchmark site's layout system, hierarchy, section order, navigation behavior, and responsive density while using original Anime Dice branding, supplied facts, localized writing, and independently implemented components.
