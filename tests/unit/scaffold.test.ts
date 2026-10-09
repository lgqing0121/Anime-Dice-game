import { describe, expect, it } from 'vitest';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getSiteOrigin,
  localeToHrefLang,
} from '../../src/config/site';

describe('site configuration', () => {
  it('exposes only the four approved locales with English as default', () => {
    expect(SUPPORTED_LOCALES).toEqual(['en', 'pt-br', 'es', 'id']);
    expect(DEFAULT_LOCALE).toBe('en');
  });

  it('maps locale routes to standards-compliant hreflang values', () => {
    expect(SUPPORTED_LOCALES.map(localeToHrefLang)).toEqual([
      'en',
      'pt-BR',
      'es',
      'id',
    ]);
  });

  it('normalizes a configured site origin and rejects a missing production origin', () => {
    expect(getSiteOrigin('https://anime-dice.test/')).toBe('https://anime-dice.test');
    expect(() => getSiteOrigin(undefined, true)).toThrow(/SITE_URL/);
    expect(getSiteOrigin(undefined, false)).toBe('http://localhost:4321');
  });
});
