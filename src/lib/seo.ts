import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  getSiteOrigin,
  localeToHrefLang,
  type Locale,
} from '../config/site';
import { GAME_FACTS } from '../data/game';
import type { HomeCopy } from '../i18n';

export interface AlternateLink {
  hrefLang: string;
  href: string;
}

const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  'pt-br': 'pt_BR',
  es: 'es_ES',
  id: 'id_ID',
};

function localeUrl(origin: string, locale: Locale): string {
  return `${origin}/${locale}/`;
}

export function buildAlternates(originInput: string): AlternateLink[] {
  const origin = getSiteOrigin(originInput, true);
  return [
    ...SUPPORTED_LOCALES.map((locale) => ({
      hrefLang: localeToHrefLang(locale),
      href: localeUrl(origin, locale),
    })),
    { hrefLang: 'x-default', href: localeUrl(origin, DEFAULT_LOCALE) },
  ];
}

export function buildSeo(locale: Locale, originInput: string, copy: HomeCopy) {
  const origin = getSiteOrigin(originInput, true);
  const canonical = localeUrl(origin, locale);
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    canonical,
    alternates: buildAlternates(origin),
    openGraph: {
      type: 'website' as const,
      locale: OG_LOCALES[locale],
      url: canonical,
      title: copy.meta.title,
      description: copy.meta.description,
      image: `${origin}/assets/anime-dice-hero.jpg`,
    },
  };
}

type JsonLdNode = Record<string, unknown>;

export function buildHomeJsonLd(
  locale: Locale,
  originInput: string,
  copy: HomeCopy,
): JsonLdNode[] {
  const origin = getSiteOrigin(originInput, true);
  const url = localeUrl(origin, locale);
  const language = localeToHrefLang(locale);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: 'Anime Dice Wiki',
      inLanguage: language,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: copy.meta.title,
      description: copy.meta.description,
      inLanguage: language,
      dateModified: GAME_FACTS.reviewDate,
      isPartOf: { '@id': `${origin}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      url: `${url}#faq`,
      inLanguage: language,
      mainEntity: copy.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];
}

export function assertSeoConfig(
  configuredOrigin: string | undefined,
  mode: 'production' | 'development',
): string {
  return getSiteOrigin(configuredOrigin, mode === 'production');
}
