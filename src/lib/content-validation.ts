import { ARTICLE_IDS, CATEGORY_IDS, type ArticleRecord, type CategoryRecord } from '../content/types';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';

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
