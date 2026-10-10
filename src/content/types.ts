export const CATEGORY_IDS = ['codes','guide','units','progression','tower','trading','updates','community'] as const;
export type CategoryId = (typeof CATEGORY_IDS)[number];

export const ARTICLE_IDS = [
  'anime-dice-codes','anime-dice-guide','anime-dice-tips','anime-dice-auto-roll','anime-dice-auto-sell',
  'anime-dice-how-to-level-up','anime-dice-how-to-skip-cutscenes','anime-dice-how-to-join-group',
  'anime-dice-tier-list','anime-dice-units','anime-dice-traits','anime-dice-mutation','anime-dice-rarity',
  'anime-dice-grades','anime-dice-max-level','anime-dice-luck','anime-dice-max-luck','anime-dice-gems',
  'anime-dice-jackpot-roll','anime-dice-lucky-spin','anime-dice-rebirth','anime-dice-max-rebirth',
  'anime-dice-quest-shop','anime-dice-tower','anime-dice-gear','anime-dice-potion','anime-dice-tickets',
  'anime-dice-trading','anime-dice-trade-value','anime-dice-value-calculator','anime-dice-market',
  'anime-dice-new-update','anime-dice-next-update','anime-dice-update-7','anime-dice-event',
  'anime-dice-admin-abuse-time','anime-dice-discord','anime-dice-reddit','anime-dice-trello','anime-dice-group',
] as const;
export type ArticleId = (typeof ARTICLE_IDS)[number];

export interface CategoryRecord { id: CategoryId; articleIds: readonly ArticleId[] }
export interface ArticleRecord {
  id: ArticleId; category: CategoryId; slug: string; keyword: string; reviewedAt: string;
  sources: readonly string[]; relatedIds: readonly ArticleId[];
}
export interface ParagraphBlock { type: 'paragraph'; text: string }
export interface ListBlock { type: 'list'; style: 'ordered' | 'unordered'; items: string[] }
export interface TableBlock { type: 'table'; headers: string[]; rows: string[][] }
export interface CalloutBlock {
  type: 'callout'; tone: 'confirmed' | 'volatile' | 'unverified'; title: string; body: string;
}
export type ContentBlock = ParagraphBlock | ListBlock | TableBlock | CalloutBlock;
export interface ArticleSection { id: string; title: string; blocks: ContentBlock[] }
export interface LocalizedArticle {
  title: string; description: string; intro: string[]; sections: ArticleSection[];
  faq: Array<{ question: string; answer: string }>; sourceNote: string; factKeys: string[];
}
export interface LocalizedCategory { title: string; description: string }
