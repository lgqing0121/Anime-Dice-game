import { describe, expect, it } from 'vitest';
import { getArticleById } from '../../src/data/articles';
import {
  getArticlePath,
  getCategoryPath,
  getEquivalentPath,
} from '../../src/lib/routes';

describe('complete wiki route helpers', () => {
  it('builds trailing-slash category and article paths for every locale', () => {
    expect(getCategoryPath('en', 'guide')).toBe('/en/guide/');
    expect(getCategoryPath('pt-br', 'progression')).toBe('/pt-br/progression/');

    const guide = getArticleById('anime-dice-guide');
    expect(getArticlePath('es', guide)).toBe('/es/guide/anime-dice-guide/');
    expect(getArticlePath('id', 'anime-dice-codes')).toBe('/id/codes/anime-dice-codes/');
  });

  it('maps stable page identities to equivalent locale paths', () => {
    expect(getEquivalentPath('pt-br', { kind: 'home' })).toBe('/pt-br/');
    expect(getEquivalentPath('es', { kind: 'category', category: 'units' })).toBe('/es/units/');
    expect(getEquivalentPath('id', { kind: 'article', article: 'anime-dice-traits' })).toBe('/id/units/anime-dice-traits/');
    expect(getEquivalentPath('en', { kind: 'privacy' })).toBe('/en/privacy/');
    expect(getEquivalentPath('es', { kind: 'terms' })).toBe('/es/terms/');
  });

  it('rejects unknown article identities instead of guessing a URL', () => {
    expect(() => getArticlePath('en', 'missing-article' as never)).toThrow(/Unknown article/);
  });
});
