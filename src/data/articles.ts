import { ARTICLE_IDS, type ArticleId, type ArticleRecord, type CategoryId } from '../content/types';

const OFFICIAL_GAME = 'https://www.roblox.com/games/113290951185459/Anime-Dice';
const DEVELOPER_GROUP = 'https://www.roblox.com/communities/33017480/More-More-Games';
const OFFICIAL_DISCORD = 'https://discord.com/invite/ag5MCCu5aQ';
const PROGRESSION_GUIDE = 'https://allthings.how/anime-dice-roblox-how-to-progress-fast-full-guide/';
const DICE_GUIDE = 'https://allthings.how/anime-dice-all-dice-rarities-and-luck-boosts/';
const TRAITS_GUIDE = 'https://allthings.how/anime-dice-traits-tier-list/';
const UPDATE_7_GUIDE = 'https://www.allthings.how/anime-dice-update-7-adds-galactic-rarity-and-six-rebirth-upgrade-paths/';
const GEAR_GUIDE = 'https://allthings.how/every-gear-in-anime-dice-and-how-to-get-them/';
const CODES_GUIDE = 'https://www.dexerto.com/roblox/anime-dice-codes-3407675/';

interface ArticleSeed { id: ArticleId; category: CategoryId; keyword: string; sources: readonly string[] }

const sourceSets: Record<CategoryId, readonly string[]> = {
  codes: [OFFICIAL_GAME, CODES_GUIDE, UPDATE_7_GUIDE],
  guide: [OFFICIAL_GAME, PROGRESSION_GUIDE],
  units: [OFFICIAL_GAME, DICE_GUIDE, TRAITS_GUIDE, PROGRESSION_GUIDE],
  progression: [OFFICIAL_GAME, PROGRESSION_GUIDE, DICE_GUIDE, UPDATE_7_GUIDE],
  tower: [OFFICIAL_GAME, PROGRESSION_GUIDE, GEAR_GUIDE],
  trading: [OFFICIAL_GAME, UPDATE_7_GUIDE, OFFICIAL_DISCORD],
  updates: [OFFICIAL_GAME, UPDATE_7_GUIDE, OFFICIAL_DISCORD],
  community: [OFFICIAL_GAME, DEVELOPER_GROUP, OFFICIAL_DISCORD],
};

const assignments: Readonly<Record<ArticleId, CategoryId>> = {
  'anime-dice-codes': 'codes',
  'anime-dice-guide': 'guide',
  'anime-dice-tips': 'guide',
  'anime-dice-auto-roll': 'guide',
  'anime-dice-auto-sell': 'guide',
  'anime-dice-how-to-level-up': 'guide',
  'anime-dice-how-to-skip-cutscenes': 'guide',
  'anime-dice-how-to-join-group': 'guide',
  'anime-dice-tier-list': 'units',
  'anime-dice-units': 'units',
  'anime-dice-traits': 'units',
  'anime-dice-mutation': 'units',
  'anime-dice-rarity': 'units',
  'anime-dice-grades': 'units',
  'anime-dice-max-level': 'units',
  'anime-dice-luck': 'progression',
  'anime-dice-max-luck': 'progression',
  'anime-dice-gems': 'progression',
  'anime-dice-jackpot-roll': 'progression',
  'anime-dice-lucky-spin': 'progression',
  'anime-dice-rebirth': 'progression',
  'anime-dice-max-rebirth': 'progression',
  'anime-dice-quest-shop': 'progression',
  'anime-dice-tower': 'tower',
  'anime-dice-gear': 'tower',
  'anime-dice-potion': 'tower',
  'anime-dice-tickets': 'tower',
  'anime-dice-trading': 'trading',
  'anime-dice-trade-value': 'trading',
  'anime-dice-value-calculator': 'trading',
  'anime-dice-market': 'trading',
  'anime-dice-new-update': 'updates',
  'anime-dice-next-update': 'updates',
  'anime-dice-update-7': 'updates',
  'anime-dice-event': 'updates',
  'anime-dice-admin-abuse-time': 'updates',
  'anime-dice-discord': 'community',
  'anime-dice-reddit': 'community',
  'anime-dice-trello': 'community',
  'anime-dice-group': 'community',
};

const keywords: Readonly<Record<ArticleId, string>> = {
  'anime-dice-codes': 'Anime Dice codes',
  'anime-dice-guide': 'Anime Dice guide',
  'anime-dice-tips': 'Anime Dice tips',
  'anime-dice-auto-roll': 'Anime Dice auto roll',
  'anime-dice-auto-sell': 'Anime Dice auto sell',
  'anime-dice-how-to-level-up': 'Anime Dice how to level up',
  'anime-dice-how-to-skip-cutscenes': 'Anime Dice how to skip cutscenes',
  'anime-dice-how-to-join-group': 'Anime Dice how to join group',
  'anime-dice-tier-list': 'Anime Dice tier list',
  'anime-dice-units': 'Anime Dice units',
  'anime-dice-traits': 'Anime Dice traits',
  'anime-dice-mutation': 'Anime Dice mutation',
  'anime-dice-rarity': 'Anime Dice rarity',
  'anime-dice-grades': 'Anime Dice grades',
  'anime-dice-max-level': 'Anime Dice max level',
  'anime-dice-luck': 'Anime Dice luck',
  'anime-dice-max-luck': 'Anime Dice max luck',
  'anime-dice-gems': 'Anime Dice gems',
  'anime-dice-jackpot-roll': 'Anime Dice jackpot roll',
  'anime-dice-lucky-spin': 'Anime Dice lucky spin',
  'anime-dice-rebirth': 'Anime Dice rebirth',
  'anime-dice-max-rebirth': 'Anime Dice max rebirth',
  'anime-dice-quest-shop': 'Anime Dice quest shop',
  'anime-dice-tower': 'Anime Dice tower',
  'anime-dice-gear': 'Anime Dice gear',
  'anime-dice-potion': 'Anime Dice potion',
  'anime-dice-tickets': 'Anime Dice tickets',
  'anime-dice-trading': 'Anime Dice trading',
  'anime-dice-trade-value': 'Anime Dice trade value',
  'anime-dice-value-calculator': 'Anime Dice value calculator',
  'anime-dice-market': 'Anime Dice market',
  'anime-dice-new-update': 'Anime Dice new update',
  'anime-dice-next-update': 'Anime Dice next update',
  'anime-dice-update-7': 'Anime Dice update 7',
  'anime-dice-event': 'Anime Dice event',
  'anime-dice-admin-abuse-time': 'Anime Dice admin abuse time',
  'anime-dice-discord': 'Anime Dice discord',
  'anime-dice-reddit': 'Anime Dice reddit',
  'anime-dice-trello': 'Anime Dice trello',
  'anime-dice-group': 'Anime Dice group',
};

const seeds: readonly ArticleSeed[] = ARTICLE_IDS.map((id) => ({
  id,
  category: assignments[id],
  keyword: keywords[id],
  sources: sourceSets[assignments[id]],
}));

function buildRelatedIds(seed: ArticleSeed): ArticleId[] {
  if (seed.id === 'anime-dice-codes') {
    return ['anime-dice-guide', 'anime-dice-new-update', 'anime-dice-discord'];
  }
  return seeds.filter((candidate) => candidate.category === seed.category && candidate.id !== seed.id)
    .slice(0, 3).map((candidate) => candidate.id);
}

export const ARTICLES: readonly ArticleRecord[] = seeds.map((seed) => ({
  ...seed,
  slug: seed.id,
  reviewedAt: '2026-10-05',
  relatedIds: buildRelatedIds(seed),
}));

const articlesById = new Map<ArticleId, ArticleRecord>(ARTICLES.map((article) => [article.id, article]));

export function getArticleById(id: ArticleId): ArticleRecord {
  const article = articlesById.get(id);
  if (!article) throw new Error(`Unknown article: ${id}`);
  return article;
}
