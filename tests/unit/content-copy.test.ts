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


const unitsProgressionIds: ArticleId[] = [
  'anime-dice-tier-list','anime-dice-units','anime-dice-traits','anime-dice-mutation','anime-dice-rarity',
  'anime-dice-grades','anime-dice-max-level','anime-dice-luck','anime-dice-max-luck','anime-dice-gems',
  'anime-dice-jackpot-roll','anime-dice-lucky-spin','anime-dice-rebirth','anime-dice-max-rebirth','anime-dice-quest-shop',
];

describe('English Units and Progression content', () => {
  it('covers all fifteen intents with explicit uncertainty boundaries', () => {
    for (const id of unitsProgressionIds) expect(EN_ARTICLE_COPY[id], id).toBeDefined();
    const visible = JSON.stringify(unitsProgressionIds.map((id) => EN_ARTICLE_COPY[id]));
    expect(visible).toContain('separate');
    expect(visible).toContain('not confirmed');
    expect(visible).not.toMatch(/guaranteed drop|exact probability|damage per second/i);
    expect(validateLocalizedContent('en', unitsProgressionIds)).toEqual([]);
  });
});


const towerTradingIds: ArticleId[] = [
  'anime-dice-tower','anime-dice-gear','anime-dice-potion','anime-dice-tickets',
  'anime-dice-trading','anime-dice-trade-value','anime-dice-value-calculator','anime-dice-market',
];
describe('English Tower and Trading content', () => {
  it('covers eight intents without fabricated live values', () => {
    for (const id of towerTradingIds) expect(EN_ARTICLE_COPY[id], id).toBeDefined();
    const visible=JSON.stringify(towerTradingIds.map((id)=>EN_ARTICLE_COPY[id]));
    expect(visible).toContain('reviewed');
    expect(visible).toContain('not confirmed');
    expect(visible).not.toMatch(/provides a live price feed|guaranteed value of|fully functional calculator/i);
    expect(validateLocalizedContent('en',towerTradingIds)).toEqual([]);
  });
});


const updatesCommunityIds: ArticleId[]=[
'anime-dice-new-update','anime-dice-next-update','anime-dice-update-7','anime-dice-event','anime-dice-admin-abuse-time',
'anime-dice-discord','anime-dice-reddit','anime-dice-trello','anime-dice-group',
];
describe('English Updates and Community content',()=>{
 it('covers nine volatile intents without invented schedules',()=>{
  for(const id of updatesCommunityIds)expect(EN_ARTICLE_COPY[id],id).toBeDefined();
  const visible=JSON.stringify(updatesCommunityIds.map((id)=>EN_ARTICLE_COPY[id]));
  expect(visible).toContain('Update 7');
  expect(visible).toContain('not verified');
  expect(visible).not.toMatch(/will release on|admin event starts at|official Reddit is|official Trello is/i);
  expect(validateLocalizedContent('en',updatesCommunityIds)).toEqual([]);
 });
 it('completes all forty English articles',()=>expect(Object.keys(EN_ARTICLE_COPY)).toHaveLength(40));
});

import { PT_BR_ARTICLE_COPY } from '../../src/i18n/articles/pt-br';
import { PT_BR_CATEGORY_COPY } from '../../src/i18n/categories/pt-br';

describe('Portuguese content',()=>{
 it('provides complete Brazilian Portuguese coverage',()=>{
  expect(Object.keys(PT_BR_CATEGORY_COPY)).toHaveLength(8);
  expect(Object.keys(PT_BR_ARTICLE_COPY)).toHaveLength(40);
  for(const id of Object.keys(EN_ARTICLE_COPY) as ArticleId[]){
   expect(PT_BR_ARTICLE_COPY[id].title).not.toBe(EN_ARTICLE_COPY[id]!.title);
   expect(PT_BR_ARTICLE_COPY[id].sections).toHaveLength(3);
  }
  expect(validateLocalizedContent('pt-br',Object.keys(PT_BR_ARTICLE_COPY) as ArticleId[])).toEqual([]);
 });
});

import { ES_ARTICLE_COPY } from '../../src/i18n/articles/es';
import { ID_ARTICLE_COPY } from '../../src/i18n/articles/id';
import { ES_CATEGORY_COPY } from '../../src/i18n/categories/es';
import { ID_CATEGORY_COPY } from '../../src/i18n/categories/id';
import { validateReleaseContent } from '../../src/lib/content-validation';

describe('Spanish, Indonesian, and release content',()=>{
 it('provides forty articles and eight categories per added locale',()=>{
  expect(Object.keys(ES_CATEGORY_COPY)).toHaveLength(8);
  expect(Object.keys(ID_CATEGORY_COPY)).toHaveLength(8);
  expect(Object.keys(ES_ARTICLE_COPY)).toHaveLength(40);
  expect(Object.keys(ID_ARTICLE_COPY)).toHaveLength(40);
  expect(validateLocalizedContent('es',Object.keys(ES_ARTICLE_COPY) as ArticleId[])).toEqual([]);
  expect(validateLocalizedContent('id',Object.keys(ID_ARTICLE_COPY) as ArticleId[])).toEqual([]);
 });
 it('passes the complete four-language release contract',()=>expect(validateReleaseContent()).toEqual([]));
});
