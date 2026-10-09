export const SUPPORTED_LOCALES = ['en', 'pt-br', 'es', 'id'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const HREF_LANGS: Record<Locale, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
  es: 'es',
  id: 'id',
};

export function localeToHrefLang(locale: Locale): string {
  return HREF_LANGS[locale];
}

export function getSiteOrigin(
  configuredOrigin: string | undefined,
  production = import.meta.env.PROD,
): string {
  const value = configuredOrigin?.trim();

  if (!value) {
    if (production) {
      throw new Error('SITE_URL is required for production builds');
    }

    return 'http://localhost:4321';
  }

  return new URL(value).origin;
}
