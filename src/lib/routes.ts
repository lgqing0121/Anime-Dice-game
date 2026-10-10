import type { ArticleId, ArticleRecord, CategoryId } from '../content/types';
import type { Locale } from '../config/site';
import { getArticleById } from '../data/articles';

export type PageRef =
  | { kind: 'home' }
  | { kind: 'category'; category: CategoryId }
  | { kind: 'article'; article: ArticleId }
  | { kind: 'privacy' }
  | { kind: 'terms' };

export function getCategoryPath(locale: Locale, category: CategoryId): string {
  return `/${locale}/${category}/`;
}
export function getArticlePath(locale: Locale, articleInput: ArticleRecord | ArticleId): string {
  const article = typeof articleInput === 'string' ? getArticleById(articleInput) : articleInput;
  return `/${locale}/${article.category}/${article.slug}/`;
}
export function getEquivalentPath(locale: Locale, page: PageRef): string {
  switch (page.kind) {
    case 'home': return `/${locale}/`;
    case 'category': return getCategoryPath(locale, page.category);
    case 'article': return getArticlePath(locale, page.article);
    case 'privacy': return `/${locale}/privacy/`;
    case 'terms': return `/${locale}/terms/`;
  }
}
