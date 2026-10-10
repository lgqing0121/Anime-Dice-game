import type { CategoryRecord } from '../content/types';

export const CATEGORIES = [
  { id: 'codes', articleIds: ['anime-dice-codes'] },
  { id: 'guide', articleIds: ['anime-dice-guide','anime-dice-tips','anime-dice-auto-roll','anime-dice-auto-sell','anime-dice-how-to-level-up','anime-dice-how-to-skip-cutscenes','anime-dice-how-to-join-group'] },
  { id: 'units', articleIds: ['anime-dice-tier-list','anime-dice-units','anime-dice-traits','anime-dice-mutation','anime-dice-rarity','anime-dice-grades','anime-dice-max-level'] },
  { id: 'progression', articleIds: ['anime-dice-luck','anime-dice-max-luck','anime-dice-gems','anime-dice-jackpot-roll','anime-dice-lucky-spin','anime-dice-rebirth','anime-dice-max-rebirth','anime-dice-quest-shop'] },
  { id: 'tower', articleIds: ['anime-dice-tower','anime-dice-gear','anime-dice-potion','anime-dice-tickets'] },
  { id: 'trading', articleIds: ['anime-dice-trading','anime-dice-trade-value','anime-dice-value-calculator','anime-dice-market'] },
  { id: 'updates', articleIds: ['anime-dice-new-update','anime-dice-next-update','anime-dice-update-7','anime-dice-event','anime-dice-admin-abuse-time'] },
  { id: 'community', articleIds: ['anime-dice-discord','anime-dice-reddit','anime-dice-trello','anime-dice-group'] },
] as const satisfies readonly CategoryRecord[];
