import { describe, expect, it } from 'vitest';
import type { ArticleId, ContentBlock } from '../../src/content/types';
import { EN_ARTICLE_COPY } from '../../src/i18n/articles/en';
import { EN_CATEGORY_COPY } from '../../src/i18n/categories/en';
import { getArticleCopy, getCategoryCopy, validateLocalizedContent } from '../../src/i18n/content';

const guideIds: ArticleId[] = [
  'anime-dice-codes',
  'anime-dice-guide',
  'anime-dice-tips',
  'anime-dice-auto-roll',
  'anime-dice-auto-sell',
  'anime-dice-how-to-level-up',
  'anime-dice-how-to-skip-cutscenes',
  'anime-dice-how-to-join-group',
];

function visibleBlockText(block: ContentBlock): string {
  switch (block.type) {
    case 'paragraph': return block.text;
    case 'list': return block.items.join(' ');
    case 'table': return [...block.headers, ...block.rows.flat()].join(' ');
    case 'callout': return `${block.title} ${block.body}`;
  }
}

describe('English Codes and Guide content', () => {
  it('provides metadata for every approved category', () => {
    expect(Object.keys(EN_CATEGORY_COPY)).toEqual([
      'codes', 'guide', 'units', 'progression', 'tower', 'trading', 'updates', 'community',
    ]);
    for (const category of Object.values(EN_CATEGORY_COPY)) {
      expect(category.title.length).toBeGreaterThan(8);
      expect(category.description.length).toBeGreaterThan(50);
    }
    expect(getCategoryCopy('en', 'guide')).toBe(EN_CATEGORY_COPY.guide);
  });

  it('provides eight distinct, substantive Codes and Guide articles', () => {
    const copies = guideIds.map((id) => EN_ARTICLE_COPY[id]!);
    expect(copies.every(Boolean)).toBe(true);
    expect(new Set(copies.map((copy) => copy.title)).size).toBe(8);
    expect(new Set(copies.map((copy) => copy.description)).size).toBe(8);

    for (const [index, copy] of copies.entries()) {
      expect(copy.title).toContain('Anime Dice');
      expect(copy.description.length).toBeGreaterThan(80);
      expect(copy.intro.join(' ').length).toBeGreaterThan(120);
      expect(copy.sections.length).toBeGreaterThanOrEqual(3);
      expect(new Set(copy.sections.map((section) => section.id)).size).toBe(copy.sections.length);
      expect(copy.faq.length).toBeGreaterThanOrEqual(2);
      expect(copy.sourceNote.length).toBeGreaterThan(40);

      const visible = [
        copy.title,
        copy.description,
        ...copy.intro,
        ...copy.sections.flatMap((section) => [
          section.title,
          ...section.blocks.map(visibleBlockText),
        ]),
        ...copy.faq.flatMap((item) => [item.question, item.answer]),
      ].join(' ');

      expect(visible).not.toMatch(/\b(?:hack|exploit|injection|script|keyless|autofarm|auto farm)\b/i);
      expect(visible.trim(), guideIds[index]).not.toContain('TODO');
    }
  });

  it('keeps confirmed game entities and conservative code status exact', () => {
    const codes = EN_ARTICLE_COPY['anime-dice-codes'];
    const visible = JSON.stringify(codes);
    expect(visible).toContain('UPDATE7');
    expect(visible).toContain('UPDATE6');
    expect(visible).toContain('Lucky Spins');
    expect(visible).toContain('Trait Rerolls');
    expect(visible).toContain('Tickets');
    expect(visible).toContain('Gems');
    expect(visible).toContain('October 5, 2026');
  });

  it('looks up exact English copies and validates the requested subset', () => {
    for (const id of guideIds) {
      expect(getArticleCopy('en', id)).toBe(EN_ARTICLE_COPY[id]);
    }
    expect(validateLocalizedContent('en', guideIds)).toEqual([]);
  });
});
