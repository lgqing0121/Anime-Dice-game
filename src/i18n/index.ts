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
  const errors = assertCompleteCopy(copy);
  if (errors.length) throw new Error(`Incomplete ${locale} dictionary: ${errors.join('; ')}`);
  return copy;
}

export function assertCompleteCopy(copy: HomeCopy): string[] {
  const errors: string[] = [];
  const visit = (expected: unknown, value: unknown, path: string): void => {
    if (value === undefined || value === null) { errors.push(`${path} is missing`); return; }
    if (typeof expected === 'string') {
      if (typeof value !== 'string' || value.trim() === '') errors.push(`${path} is empty`);
      return;
    }
    if (Array.isArray(expected)) {
      if (!Array.isArray(value)) { errors.push(`${path} is missing`); return; }
      if (value.length !== expected.length) errors.push(`${path} length must be ${expected.length}`);
      expected.forEach((item, index) => visit(item, value[index], `${path}[${index}]`));
      return;
    }
    if (expected && typeof expected === 'object') {
      for (const [key, item] of Object.entries(expected)) {
        visit(item, (value as Record<string, unknown>)[key], path ? `${path}.${key}` : key);
      }
    }
  };
  visit(en, copy, '');
  return errors;
}

export type { HomeCopy } from './types';
