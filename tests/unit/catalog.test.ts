import { describe, expect, it } from 'vitest';
import { ARTICLES } from '../../src/data/articles';
import { CATEGORIES } from '../../src/data/categories';
import { validateContentCatalog } from '../../src/lib/content-validation';

const expectedCategories = ['codes', 'guide', 'units', 'progression', 'tower', 'trading', 'updates', 'community'];
const expectedCounts = [1, 7, 7, 8, 4, 4, 5, 4];

describe('complete wiki content catalog', () => {
  it('maps the approved forty keyword intents into eight ordered categories', () => {
    expect(CATEGORIES.map((category) => category.id)).toEqual(expectedCategories);
    expect(CATEGORIES.map((category) => category.articleIds.length)).toEqual(expectedCounts);
    expect(ARTICLES).toHaveLength(40);
    expect(new Set(ARTICLES.map((article) => article.id)).size).toBe(40);
    expect(new Set(ARTICLES.map((article) => article.slug.toLowerCase())).size).toBe(40);
    expect(new Set(ARTICLES.map((article) => article.keyword.toLowerCase())).size).toBe(40);
  });

  it('keeps every record sourceable, dated, safely slugged, and internally connected', () => {
    const ids = new Set(ARTICLES.map((article) => article.id));

    for (const article of ARTICLES) {
      expect(article.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(article.sources.length).toBeGreaterThan(0);
      expect(article.sources.every((source) => source.startsWith('https://'))).toBe(true);
      expect(article.relatedIds.length).toBeGreaterThanOrEqual(2);
      expect(article.relatedIds.length).toBeLessThanOrEqual(4);
      expect(article.relatedIds).not.toContain(article.id);
      expect(article.relatedIds.every((id) => ids.has(id))).toBe(true);
      expect(article.keyword).not.toMatch(/\b(?:hack|exploit|injection|script|keyless|autofarm|auto farm)\b/i);
    }
  });

  it('accepts the approved catalog', () => {
    expect(validateContentCatalog()).toEqual([]);
  });

  it('rejects normalized slug collisions and slash-based pseudo paths', () => {
    const collision = ARTICLES.map((article) => ({ ...article, relatedIds: [...article.relatedIds], sources: [...article.sources] }));
    collision[1] = { ...collision[1], slug: collision[0].slug.toUpperCase() };
    expect(validateContentCatalog({ articles: collision })).toContain('Article slugs must be unique after normalization');

    const slashSlug = ARTICLES.map((article) => ({ ...article, relatedIds: [...article.relatedIds], sources: [...article.sources] }));
    slashSlug[2] = { ...slashSlug[2], slug: 'anime-dice//guide' };
    expect(validateContentCatalog({ articles: slashSlug })).toContain('Article slugs must be lowercase ASCII path segments');
  });

  it('rejects missing sources, orphan relationships, and category drift', () => {
    const missingSource = ARTICLES.map((article) => ({ ...article, relatedIds: [...article.relatedIds], sources: [...article.sources] }));
    missingSource[0] = { ...missingSource[0], sources: [] };
    expect(validateContentCatalog({ articles: missingSource })).toContain('Every article requires at least one HTTPS source');

    const orphan = ARTICLES.map((article) => ({ ...article, relatedIds: [...article.relatedIds], sources: [...article.sources] }));
    orphan[0] = { ...orphan[0], relatedIds: ['missing-article' as never, ...orphan[0].relatedIds.slice(1)] };
    expect(validateContentCatalog({ articles: orphan })).toContain('Related article IDs must resolve');

    const wrongCategory = CATEGORIES.map((category) => ({ ...category, articleIds: [...category.articleIds] }));
    wrongCategory[1] = { ...wrongCategory[1], articleIds: wrongCategory[1].articleIds.slice(1) };
    expect(validateContentCatalog({ categories: wrongCategory })).toContain('Category membership must match article records');
  });
});
