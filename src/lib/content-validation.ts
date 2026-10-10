import { ARTICLE_IDS, CATEGORY_IDS, type ArticleId, type ArticleRecord, type CategoryRecord } from '../content/types';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ARTICLE_FACTS } from '../data/article-facts';

interface CatalogInput { categories?: readonly CategoryRecord[]; articles?: readonly ArticleRecord[] }
const expectedCounts = [1, 7, 7, 8, 4, 4, 5, 4];
const safeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const forbiddenIntent = /\b(?:hack|exploit|injection|script|keyless|autofarm|auto farm)\b/i;

export function validateContentCatalog(input: CatalogInput = {}): string[] {
  const categories = input.categories ?? CATEGORIES;
  const articles = input.articles ?? ARTICLES;
  const errors = new Set<string>();

  if (categories.length !== CATEGORY_IDS.length ||
      categories.some((category, index) => category.id !== CATEGORY_IDS[index]) ||
      categories.some((category, index) => category.articleIds.length !== expectedCounts[index])) {
    errors.add('Category order and counts must match the approved keyword inventory');
  }
  if (articles.length !== ARTICLE_IDS.length ||
      new Set(articles.map((article) => article.id)).size !== ARTICLE_IDS.length) {
    errors.add('The catalog must contain exactly forty unique article IDs');
  }

  const normalizedSlugs = articles.map((article) => article.slug.toLowerCase());
  if (new Set(normalizedSlugs).size !== normalizedSlugs.length) {
    errors.add('Article slugs must be unique after normalization');
  }
  if (articles.some((article) => !safeSlug.test(article.slug))) {
    errors.add('Article slugs must be lowercase ASCII path segments');
  }
  if (articles.some((article) => !isoDate.test(article.reviewedAt) || Number.isNaN(Date.parse(article.reviewedAt)))) {
    errors.add('Every article requires a valid ISO review date');
  }
  if (articles.some((article) => article.sources.length === 0 ||
      article.sources.some((source) => !source.startsWith('https://')))) {
    errors.add('Every article requires at least one HTTPS source');
  }
  if (articles.some((article) => forbiddenIntent.test(article.keyword))) {
    errors.add('Article keywords must exclude unsafe intent');
  }

  const ids = new Set(articles.map((article) => article.id));
  if (articles.some((article) => article.relatedIds.some((relatedId) => !ids.has(relatedId)))) {
    errors.add('Related article IDs must resolve');
  }
  if (articles.some((article) => article.relatedIds.length < 2 ||
      article.relatedIds.length > 4 || article.relatedIds.includes(article.id))) {
    errors.add('Related article IDs must contain two to four other articles');
  }

  const categoryMembership = new Map(categories.map((category) => [category.id, new Set(category.articleIds)]));
  if (articles.some((article) => !categoryMembership.get(article.category)?.has(article.id)) ||
      categories.some((category) => category.articleIds.some((id) =>
        articles.find((article) => article.id === id)?.category !== category.id)) ||
      categories.reduce((total, category) => total + category.articleIds.length, 0) !== articles.length) {
    errors.add('Category membership must match article records');
  }
  return [...errors];
}

import { SUPPORTED_LOCALES } from '../config/site';
import { getArticleCopy, getCategoryCopy, validateLocalizedContent } from '../i18n/content';

export function validateReleaseContent(): string[] {
  const errors = [...validateContentCatalog()];
  for (const locale of SUPPORTED_LOCALES) {
    errors.push(...validateLocalizedContent(locale, ARTICLE_IDS));
    const bodySignatures = new Set<string>();
    const detailSignatures = new Set<string>();
    for (const categoryId of CATEGORY_IDS) {
      try { getCategoryCopy(locale, categoryId); } catch { errors.push(`Missing category copy: ${locale}/${categoryId}`); }
    }
    for (const article of ARTICLES) {
      try {
        const copy = getArticleCopy(locale, article.id);
        const english = getArticleCopy('en', article.id);
        const expectedFactKeys = ARTICLE_FACTS[article.id].factKeys;
        if (copy.factKeys.join('|') !== expectedFactKeys.join('|')) errors.push('Fact contract mismatch: '+locale+'/'+article.id);
        if (article.id !== 'anime-dice-codes' && copy.sections.length < 4) errors.push('Insufficient substantive outline: '+locale+'/'+article.id);
        if (copy.sections.length !== english.sections.length || copy.faq.length !== english.faq.length) {
          errors.push(`Structure mismatch: ${locale}/${article.id}`);
        }
        const shape = copy.sections.map((section) => section.blocks.map((block) => block.type).join(',')).join('|');
        const englishShape = english.sections.map((section) => section.blocks.map((block) => block.type).join(',')).join('|');
        if (shape !== englishShape) errors.push('Block structure mismatch: '+locale+'/'+article.id);
        const outlineSignature = copy.sections.map((section) => section.title.toLowerCase()).join('|');
        if (article.id !== 'anime-dice-codes' && !outlineSignature.includes(copy.title.replace(/^Anime Dice:?\s*/i,'').toLowerCase())) errors.push('Non-specific article outline: '+locale+'/'+article.id);
        const sectionIds = copy.sections.map((section) => section.id).join('|');
        const englishSectionIds = english.sections.map((section) => section.id).join('|');
        if (sectionIds !== englishSectionIds) errors.push('Section ID mismatch: '+locale+'/'+article.id);
        const tables = copy.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'table'));
        const englishTables = english.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'table'));
        if (tables.length !== englishTables.length || tables.some((table, index) => table.headers.length !== englishTables[index]?.headers.length || table.rows.some((row) => row.length !== table.headers.length))) errors.push('Table shape mismatch: '+locale+'/'+article.id);
        const bodySignature = JSON.stringify({ intro: copy.intro, sections: copy.sections, faq: copy.faq });
        if (bodySignatures.has(bodySignature)) errors.push('Duplicate article body: '+locale+'/'+article.id);
        bodySignatures.add(bodySignature);
        const detailSignature = JSON.stringify(copy.sections[1]?.blocks ?? []);
        if (detailSignatures.has(detailSignature)) errors.push('Duplicate intent details: '+locale+'/'+article.id);
        detailSignatures.add(detailSignature);
        const requiredTokens: Partial<Record<ArticleId, readonly string[]>> = {
          'anime-dice-codes':['UPDATE7','UPDATE6','Lucky Spins','Trait Rerolls','Tickets','Gems'],
          'anime-dice-auto-roll':['Auto','Hide'],
          'anime-dice-auto-sell':['Sell Units','Equip Best'],
          'anime-dice-how-to-join-group':['More & More Games'],
          'anime-dice-traits':['Trait Rerolls'],
          'anime-dice-update-7':['Galactic','UPDATE7'],
          'anime-dice-discord':['ag5MCCu5aQ'],
          'anime-dice-group':['More & More Games'],
        };
        for (const token of requiredTokens[article.id] ?? []) if (!bodySignature.includes(token)) errors.push('Missing factual token '+token+': '+locale+'/'+article.id);
        if (/Review the current team and resources\.|Confira a equipe e os recursos atuais\.|Comprueba el equipo y los recursos actuales\.|Periksa tim dan resource saat ini\./i.test(bodySignature)) errors.push('Legacy generic article body: '+locale+'/'+article.id);
        for (const relatedId of article.relatedIds) getArticleCopy(locale, relatedId);
      } catch {
        errors.push(`Release coverage missing: ${locale}/${article.id}`);
      }
    }
  }
  return [...new Set(errors)];
}
