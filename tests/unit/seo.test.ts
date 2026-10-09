import { describe, expect, it } from 'vitest';
import { getHomeCopy } from '../../src/i18n';
import {
  assertSeoConfig,
  buildAlternates,
  buildHomeJsonLd,
  buildSeo,
} from '../../src/lib/seo';

const origin = 'https://anime-dice.test';

describe('multilingual SEO helpers', () => {
  it('builds a self-canonical URL and reciprocal language alternates', () => {
    const seo = buildSeo('pt-br', origin, getHomeCopy('pt-br'));
    expect(seo.canonical).toBe('https://anime-dice.test/pt-br/');
    expect(seo.alternates).toEqual([
      { hrefLang: 'en', href: 'https://anime-dice.test/en/' },
      { hrefLang: 'pt-BR', href: 'https://anime-dice.test/pt-br/' },
      { hrefLang: 'es', href: 'https://anime-dice.test/es/' },
      { hrefLang: 'id', href: 'https://anime-dice.test/id/' },
      { hrefLang: 'x-default', href: 'https://anime-dice.test/en/' },
    ]);
    expect(buildAlternates(origin)).toEqual(seo.alternates);
  });

  it('keeps page and social metadata aligned with localized copy', () => {
    const copy = getHomeCopy('es');
    const seo = buildSeo('es', origin, copy);
    expect(seo.title).toBe(copy.meta.title);
    expect(seo.description).toBe(copy.meta.description);
    expect(seo.openGraph).toEqual({
      type: 'website',
      locale: 'es_ES',
      url: 'https://anime-dice.test/es/',
      title: copy.meta.title,
      description: copy.meta.description,
      image: 'https://anime-dice.test/assets/anime-dice-hero.jpg',
    });
  });

  it('builds visible FAQ parity and locale-aware JSON-LD without unfinished routes', () => {
    const copy = getHomeCopy('id');
    const graph = buildHomeJsonLd('id', origin, copy);
    const faq = graph.find((node) => node['@type'] === 'FAQPage');
    expect(graph.map((node) => node['@type'])).toEqual(['WebSite', 'WebPage', 'FAQPage']);
    expect(graph.every((node) => node.inLanguage === 'id')).toBe(true);
    expect(faq?.mainEntity).toEqual(
      copy.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    );
    expect(JSON.stringify(graph)).not.toMatch(/\/(?:codes|guide|units|tower|trading|updates)\//);
  });

  it('rejects a missing production origin and allows a local development origin', () => {
    expect(() => assertSeoConfig(undefined, 'production')).toThrow(/SITE_URL/);
    expect(assertSeoConfig(undefined, 'development')).toBe('http://localhost:4321');
  });
});
