import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '../config/site';

export function detectLocale(language: string): Locale {
  const normalized = language.toLowerCase();
  if (normalized.startsWith('pt')) return 'pt-br';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('id')) return 'id';
  return DEFAULT_LOCALE;
}

export function routeLanguageGateway(): void {
  let saved: string | null = null;
  try { saved = localStorage.getItem('preferredLocale'); } catch {}
  const locale = SUPPORTED_LOCALES.includes(saved as Locale) ? saved as Locale : detectLocale(navigator.language);
  location.replace(`/${locale}/`);
}
