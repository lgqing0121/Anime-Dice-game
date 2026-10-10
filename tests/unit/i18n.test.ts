import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES, type Locale } from '../../src/config/site';
import { assertCompleteCopy, getHomeCopy, type HomeCopy } from '../../src/i18n';

const preservedEntities = [
  'Anime Dice',
  'UPDATE7',
  'Lucky Spins',
  'Trait Rerolls',
  'Gems',
  'Tickets',
];

describe('homepage translations', () => {
  it('provides a complete dictionary for every supported locale', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const copy = getHomeCopy(locale);
      expect(assertCompleteCopy(copy), locale).toEqual([]);
      expect(copy.faq.items).toHaveLength(6);
      expect(copy.modules.items).toHaveLength(8);
    }
  });

  it('keeps metadata within the approved search-result limits', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const { meta } = getHomeCopy(locale);
      expect(meta.title.length, `${locale} title`).toBeLessThanOrEqual(60);
      expect(meta.description.length, `${locale} description`).toBeGreaterThanOrEqual(140);
      expect(meta.description.length, `${locale} description`).toBeLessThanOrEqual(160);
    }
  });

  it('preserves game entities in every locale', () => {
    for (const locale of SUPPORTED_LOCALES) {
      const serialized = JSON.stringify(getHomeCopy(locale));
      for (const entity of preservedEntities) {
        expect(serialized, `${locale} missing ${entity}`).toContain(entity);
      }
    }
  });

  it('uses localized prose rather than English answers in non-English locales', () => {
    const english = getHomeCopy('en');
    for (const locale of ['pt-br', 'es', 'id'] as const) {
      const copy = getHomeCopy(locale);
      expect(copy.hero.description).not.toBe(english.hero.description);
      expect(copy.about.paragraphs[0]).not.toBe(english.about.paragraphs[0]);
      expect(copy.faq.items.map((item) => item.answer)).not.toEqual(
        english.faq.items.map((item) => item.answer),
      );
    }
  });

  it('reports empty required copy and rejects unsupported locale input', () => {
    const broken = structuredClone(getHomeCopy('en'));
    broken.hero.description = '';
    expect(assertCompleteCopy(broken)).toContain('hero.description is empty');
    expect(() => getHomeCopy('fr' as Locale)).toThrow(/Unsupported locale/);
  });

  it('rejects missing keys and shortened translated module details', () => {
    const missing = structuredClone(getHomeCopy('en')) as Partial<HomeCopy>;
    delete missing.hero;
    expect(assertCompleteCopy(missing as HomeCopy)).toContain('hero is missing');

    const shortened = structuredClone(getHomeCopy('es'));
    shortened.modules.items[3].highlights.pop();
    expect(assertCompleteCopy(shortened)).toContain('modules.items[3].highlights length must be 5');
  });

  it('keeps critical factual quantities equivalent across locales', () => {
    const scale = { en: /1 quintillion/i, 'pt-br': /1 quintilhão/i, es: /1 trillón/i, id: /1 kuintiliun/i };
    for (const locale of SUPPORTED_LOCALES) {
      const dice = getHomeCopy(locale).modules.items.find((item) => item.id === 'dice')!;
      expect(dice.highlights[3], locale).toMatch(scale[locale]);
      expect(dice.highlights[4], locale).toMatch(/5(?:[.,]000){3}/);
    }
  });
});
