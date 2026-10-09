import type { Locale } from '../config/site';
import { en } from './en';
import { es } from './es';
import { id } from './id';
import { ptBr } from './pt-br';
import type { HomeCopy } from './types';

const dictionaries: Record<Locale, HomeCopy> = { en, 'pt-br': ptBr, es, id };

export function getHomeCopy(locale: Locale): HomeCopy {
  const copy = dictionaries[locale];
  if (!copy) throw new Error(`Unsupported locale: ${locale}`);
  return copy;
}

export function assertCompleteCopy(copy: HomeCopy): string[] {
  const errors: string[] = [];
  const visit = (value: unknown, path: string): void => {
    if (typeof value === 'string' && value.trim() === '') errors.push(`${path} is empty`);
    if (Array.isArray(value)) value.forEach((item, index) => visit(item, `${path}[${index}]`));
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.entries(value).forEach(([key, item]) => visit(item, path ? `${path}.${key}` : key));
    }
  };
  visit(copy, '');
  return errors;
}

export type { HomeCopy } from './types';
