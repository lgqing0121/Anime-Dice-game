# Anime Dice Complete Multilingual Wiki Design

**Date:** 2026-10-10  
**Status:** Approved in conversation; awaiting written-spec review  
**Production origin:** https://animedicegamei.wiki  
**Repository destination:** https://github.com/lgqing0121/Anime-Dice-game.git

## Objective

Extend the approved four-language Anime Dice homepage into a complete community wiki while preserving the information architecture, content density, and responsive behavior of https://rideapetwiki.wiki/. Use original Anime Dice branding and writing; do not copy benchmark text, assets, or identity.

The finished site serves English, Brazilian Portuguese, Spanish, and Indonesian. It contains four localized homepages, eight category hubs per locale, and one localized article for every approved keyword intent in 内页/keywords.json, plus localized privacy and terms pages, a root language gateway, and a custom not-found page.

Success means every advertised route exists, each locale is complete, factual claims are traceable to supplied research or its cited sources, unsupported claims are omitted or explicitly described as unverified, and SEO uses the production origin. Development stays local until the user approves the completed site. No remote push, DNS change, or deployment occurs before that approval.

## Approved Scope

Primary indexable content:

- 4 localized homepages
- 32 localized category hubs: 8 categories × 4 locales
- 160 localized articles: 40 keyword intents × 4 locales
- 196 primary SEO content URLs

Supporting routes: root language gateway, localized privacy and terms, custom not-found page, robots.txt, and sitemap.xml. Legal pages may enter the sitemap only if they remain indexable at release review.

## Content Inventory

The fixed categories and counts from 内页/keywords.json are Codes 1, Guide 7, Units 7, Progression 8, Tower 4, Trading 4, Updates 5, and Community 4.

Every approved keyword maps to exactly one article. Synonyms do not create duplicate pages. Every article needs a distinct intent, title, introduction, outline, FAQ, and related-link set. Pages must not be thin doorway pages that merely substitute a keyword into repeated copy.

Scripts, exploits, hacks, keyless tools, injection, autofarm, credential theft, and unrelated meanings of “anime dice” remain excluded.

## URL Architecture

Permanent routes are /{locale}/, /{locale}/{category}/, /{locale}/{category}/{article-slug}/, /{locale}/privacy/, and /{locale}/terms/.

Locale segments are exactly en, pt-br, es, and id. Category and article slugs use stable English ASCII across locales so equivalent pages map deterministically. Visible copy is localized.

The root exposes crawlable links to all locales and may route a visitor using a saved choice or supported browser language. Invalid or unsupported choices fall back to English.

## Information Architecture

### Category hubs

Each category page follows the benchmark pattern: shared header; Home-to-category breadcrumb; localized H1 and introduction; reserved advertisement slot; responsive article-card grid; desktop sidebar with category counts and active codes; shared footer. Cards contain unique titles, descriptions, useful review dates, and descriptive links. Category pages never advertise nonexistent articles.

### Article pages

Each article follows the benchmark long-form pattern: shared header; full breadcrumb; one localized H1; unique summary and review date; reserved advertisement slot; generated table of contents; evidence-backed prose, steps, lists, callouts, and tables; source/review note; matching visible and structured FAQ; related existing articles; desktop category/code sidebar; shared footer.

Desktop uses two columns. Mobile uses one ordered column with the sidebar after the article.

## Article Intent Rules

The keyword supplies editorial intent, not permission to invent an answer.

- Factual how-to pages use only documented steps.
- Rankings use documented multipliers, costs, chances, or rarity bands; no invented combat rankings.
- Volatile pages show a review date and current confirmed state.
- Unverified topics state what is unknown and how to check safely.
- Future-update topics never predict dates, rewards, or features.
- Trading pages do not invent prices or market datasets. They explain confirmed scope, value factors, and safe verification.
- Community pages link only verified Roblox, developer group, and Discord destinations and state when no official Reddit or Trello is verified.

## Content Sources and Integrity

Editorial priority: supplied files; official Anime Dice Roblox experience and developer group; verified official Discord supplied by the research; articles explicitly cited by the research; supplied third-party gameplay guide labeled third-party.

Each factual record stores source URLs and a review date.

Rules:

1. Never imply affiliation with Roblox Corporation or More & More Games.
2. Never translate codes or actual in-game entity names.
3. Preserve Anime Dice as the canonical name in all locale metadata.
4. Use conservative wording when sources disagree.
5. Omit disputed rewards, dates, prices, chances, and statuses unless uncertainty is clearly labeled.
6. Show review dates for volatile material.
7. Keep facts identical across locales.
8. No keyword stuffing, copied competitor prose, fake authors, testimonials, or unsupported completeness claims.

## Localization

Visitor copy is manually localized for en, pt-BR, es, and id. A shared language-neutral model owns codes, dates, numbers, item names, URLs, categories, and relationships. Locale files own metadata, headings, prose, FAQs, labels, and alt text.

Validation fails when any locale lacks an article, section, FAQ, legal page, navigation label, or metadata field. Localized pages do not silently fall back to English paragraphs.

## Technical Architecture

Continue with Astro, TypeScript, static output, Vitest, and Playwright.

- src/data/categories.ts: IDs, counts, membership
- src/data/articles.ts: IDs, slugs, keywords, dates, sources, fact blocks, FAQs, relationships
- src/data/game.ts: official shared facts and links
- src/i18n/articles/{locale}.ts: localized article content by stable ID
- src/i18n/categories/{locale}.ts: localized category copy
- src/i18n/legal/{locale}.ts: localized legal copy
- src/lib/content-validation.ts: completeness, source, route, and fact-parity validation
- src/pages/[locale]/[category]/index.astro: category hubs
- src/pages/[locale]/[category]/[slug].astro: articles
- src/pages/[locale]/privacy.astro and terms.astro: legal pages
- src/pages/404.astro: recovery page
- Reusable breadcrumb, TOC, article, category-card, source-note, FAQ, related-guides, and sidebar components

Large locale modules may split by category. Public interfaces stay keyed by stable IDs. Static paths derive only from validated records, so routes, canonical URLs, hreflang, navigation, related links, and sitemap share one source of truth.

## Navigation and Internal Linking

Homepage anchors become localized routes. Header, homepage modules, sidebar, cards, footer, and CTAs use route helpers.

Each article links to its category, two to four relevant articles, the localized homepage, and all equivalent language versions. Links stay in the selected locale until explicit language switching. No page links to a missing translation or placeholder.

## SEO

Every indexable page has unique localized title and description, self-canonical on https://animedicegamei.wiki, reciprocal hreflang for en, pt-BR, es, and id, x-default to the English equivalent, matching social metadata, one H1, and ordered headings.

Structured data: home uses WebSite, WebPage, FAQPage; categories use CollectionPage and BreadcrumbList; articles use Article, BreadcrumbList, and visible FAQPage; legal pages use WebPage. Structured data contains only visible content. dateModified uses the review date. VideoObject is omitted without complete verified metadata.

The sitemap derives from validated routes. robots.txt points to the production sitemap. The not-found page is excluded. The gateway avoids duplicate homepage content; /en/ remains x-default.

## Visual and Interaction System

Retain the approved identity: dark navy default, Galactic Violet, Electric Cyan, Gold, verified Green, accessible light theme, roughly 1280px maximum width and 60px sticky header, desktop sticky sidebar, restrained cards, readable tables, mobile menu, language switcher, and theme persistence.

Long-form pages add readable line length, responsive table wrappers, confirmed/volatile/unverified callouts, and visible focus states. Sticky TOC is used only when it does not conflict with the sidebar. No benchmark branding or media is copied.

## Privacy and Terms

Legal pages describe actual static-site behavior. They do not claim analytics, ads, cookies, accounts, submissions, or data collection unless those exist. If deployment adds analytics or advertising, legal copy must be updated before activation.

## Failure Behavior

Missing SITE_URL blocks production. Invalid relationships, missing translations, duplicate slugs/canonicals, orphan articles, empty categories, and missing sources fail validation. Unsupported routes show the not-found experience. Missing optional media falls back to text. Broken sources are removed or labeled unavailable, never converted into claims.

## Verification

Before requesting deployment approval:

1. Type-check with zero errors or warnings.
2. Validate 8 categories and 40 articles.
3. Validate all 40 articles in all 4 locales.
4. Build with SITE_URL=https://animedicegamei.wiki.
5. Confirm all 196 primary SEO routes.
6. Crawl internal links with zero broken destinations.
7. Verify reciprocal canonical and hreflang groups.
8. Verify sitemap membership.
9. Parse JSON-LD and compare FAQ content.
10. Check metadata, H1, and intent uniqueness.
11. Test desktop/mobile navigation, themes, keyboard access, reduced motion, 200% zoom, tables, and long labels.
12. Visually inspect representative home, category, long article, table article, and legal pages in every locale.
13. Scan for placeholders, benchmark branding, unsafe terms, invented values, untranslated paragraphs, and external image hotlinks.
14. Run a final independent whole-branch review.
15. Confirm only intentional Git changes remain.

## Repository and Deployment Boundary

Local commits may preserve progress. Until final user approval: do not push to https://github.com/lgqing0121/Anime-Dice-game.git, create a pull request, deploy, change DNS for animedicegamei.wiki, or submit to Google Search Console.

After approval, push, hosting, domain connection, production smoke testing, and Search Console submission form a separate explicitly authorized release step.

## Non-Goals

No live Roblox API refresh; accounts, comments, forums, submissions, or editable backend; speculative trading database or fake calculator; automatic machine translation; unsafe script/exploit content; copied benchmark content; or deployment before final approval.

## Approved Direction

Use the benchmark's structural model—homepage, category hubs, long-form articles, persistent sidebar, footer, and dense internal linking—while delivering an original, source-constrained Anime Dice wiki. “Complete” means every approved keyword has a real four-language article and every advertised URL resolves; it does not mean inventing information where evidence is silent.
