export type ModuleDisplayType = 'code-cards' | 'step-by-step' | 'tier-grid' | 'card-list';

export interface ModuleHighlight {
  label: string;
  detail: string;
  badge?: string;
}

export interface ExploreModule {
  order: number;
  id: string;
  name: string;
  description: string;
  href: string;
  displayType: ModuleDisplayType;
  highlights: ModuleHighlight[];
  references: string[];
}

export const EXPLORE_MODULES: ExploreModule[] = [
  {
    order: 1,
    id: 'codes',
    name: 'Anime Dice Codes',
    description: 'Claim the latest Anime Dice codes for Lucky Spins, Trait Rerolls, Tickets, and Gems. Code status is reviewed after major updates.',
    href: '#codes',
    displayType: 'code-cards',
    highlights: [
      { label: 'UPDATE7', detail: 'UPD 7 free reward bundle', badge: 'Active' },
      { label: 'UPDATE6', detail: 'Lucky Spins, Trait Rerolls, Tickets and Gems', badge: 'Active' },
    ],
    references: [
      'https://www.roblox.com/games/113290951185459/Anime-Dice',
      'https://www.dexerto.com/roblox/anime-dice-codes-3407675/',
      'https://www.allthings.how/anime-dice-update-7-adds-galactic-rarity-and-six-rebirth-upgrade-paths/',
    ],
  },
  {
    order: 2,
    id: 'guide',
    name: 'Anime Dice Beginner Guide',
    description: 'Learn the roll, place, earn, and upgrade loop. This route prioritizes compounding upgrades instead of spending rare resources on temporary units.',
    href: '#guide',
    displayType: 'step-by-step',
    highlights: [
      { label: '1', detail: 'Roll units and place characters on every available plot pedestal for passive cash.' },
      { label: '2', detail: 'Enable Auto and Hide so rolls continue while you manage the rest of your base.' },
      { label: '3', detail: 'Use Equip Best before selling duplicates, then configure auto-sell.' },
      { label: '4', detail: 'Invest early cash in Money and Luck, then Roll Speed once income is stable.' },
      { label: '5', detail: 'Buy stronger dice and save Gems and Trait Rerolls for long-term units.' },
    ],
    references: [
      'https://www.roblox.com/games/113290951185459/Anime-Dice',
      'https://allthings.how/anime-dice-roblox-how-to-progress-fast-full-guide/',
      'https://allthings.how/anime-dice-full-guide-for-roblox-update-4/',
    ],
  },
  {
    order: 3,
    id: 'tier-list',
    name: 'Anime Dice Tier List',
    description: 'Compare progression bands using the rarity and Luck tiers printed by the game. The list avoids unsupported combat rankings.',
    href: '#units',
    displayType: 'tier-grid',
    highlights: [
      { label: 'Galactic', detail: 'Galactic is the newest top pull rarity; Heavenly and Secret II are the highest documented Dice Shop bands.' },
      { label: 'Heavenly', detail: 'Secret I and Celestial dice, including Chrono, Cyber, Toxic, Arcane, Corrupted, and Titan.' },
      { label: 'Secret I', detail: 'Exotic, Divine, and Mythical options including Royal, Prismatic, Black Hole, Dragon, Solar, Lunar, and Galaxy.' },
      { label: 'Common', detail: 'Common through Legendary dice, from Normal and Fire through Light, Blood Moon, and Void.' },
    ],
    references: [
      'https://www.allthings.how/anime-dice-update-7-adds-galactic-rarity-and-six-rebirth-upgrade-paths/',
      'https://allthings.how/anime-dice-all-dice-rarities-and-luck-boosts/',
      'https://www.roblox.com/games/113290951185459/Anime-Dice',
    ],
  },
  {
    order: 4,
    id: 'dice',
    name: 'Anime Dice Dice List',
    description: 'Browse Dice Shop progression from Normal to Radiant. Each upgrade increases listed Luck but does not guarantee a particular character.',
    href: '#progression',
    displayType: 'card-list',
    highlights: [
      { label: 'Normal', detail: 'Common die costing $1 with a 2x Luck boost.' },
      { label: 'Storm', detail: 'Epic die costing $200 million with a 400x Luck boost.' },
      { label: 'Light', detail: 'Legendary die costing $12 billion with a 1,500x Luck boost.' },
      { label: 'Prismatic', detail: 'Exotic die costing $1 quintillion with a 1,000,000x Luck boost.' },
      { label: 'Radiant', detail: 'Heavenly die costing $100 octillion with a 5,000,000,000x Luck boost.' },
    ],
    references: [
      'https://allthings.how/anime-dice-all-dice-rarities-and-luck-boosts/',
      'https://www.roblox.com/games/113290951185459/Anime-Dice',
    ],
  },
  {
    order: 5,
    id: 'traits',
    name: 'Anime Dice Traits Guide',
    description: 'Compare traits by displayed multipliers and roll chances. Save rare rerolls for units that will remain in your active team.',
    href: '#units',
    displayType: 'card-list',
    highlights: [
      { label: 'Eternal', detail: '27x Income, Damage, and Health; the strongest documented all-stat trait.' },
      { label: 'Transcendent', detail: '15x Income, Damage, and Health with a displayed 0.006% chance.' },
      { label: 'Monarch', detail: '8x Income, Damage, and Health with a displayed 0.025% chance.' },
      { label: 'Shogun', detail: '5x Income, Damage, and Health with a displayed 0.12% chance.' },
      { label: 'Samurai', detail: '3x Income, Damage, and Health with a displayed 0.5% chance.' },
    ],
    references: [
      'https://allthings.how/anime-dice-roblox-how-to-progress-fast-full-guide/',
      'https://allthings.how/anime-dice-traits-tier-list/',
      'https://www.roblox.com/games/113290951185459/Anime-Dice',
    ],
  },
  {
    order: 6,
    id: 'rebirth',
    name: 'Anime Dice Rebirth Guide',
    description: 'Exchange temporary cash progress for permanent progression. Update 7 awards one Upgrade Point per rebirth across six paths.',
    href: '#progression',
    displayType: 'step-by-step',
    highlights: [
      { label: '1', detail: 'Wait until equipped units can rebuild income quickly after the reset.' },
      { label: '2', detail: 'Spend remaining cash on useful upgrades before rebirthing.' },
      { label: '3', detail: 'Rebirth while keeping collected units, grades, and traits.' },
      { label: '4', detail: 'Receive one Rebirth Upgrade Point under the Update 7 system.' },
      { label: '5', detail: 'Assign points across six paths, restart Auto roll, and rebuild income.' },
    ],
    references: [
      'https://www.allthings.how/anime-dice-update-7-adds-galactic-rarity-and-six-rebirth-upgrade-paths/',
      'https://allthings.how/anime-dice-roblox-how-to-progress-fast-full-guide/',
      'https://allthings.how/roblox-anime-dice-guide-upgrade-priority-and-rebirth-timing/',
    ],
  },
  {
    order: 7,
    id: 'gears',
    name: 'Anime Dice Gears Guide',
    description: 'Find Tower drops that provide permanent Cash, Luck, Gems, Damage, trait-roll, and movement bonuses.',
    href: '#tower',
    displayType: 'card-list',
    highlights: [
      { label: "Angel's Halo", detail: '+30% Luck and +5 Walk Speed; a 0.02% drop from Dragon Tower Floors 90+.' },
      { label: "Sakuna's Sash", detail: '2x Damage, +30% Luck, and +30% Gems; a 0.02% drop from Cursed Tower Floors 90+.' },
      { label: "Enol's Drums", detail: '+40% Luck and 1.5x Cash; a 0.02% drop from Pirate Tower Floors 90+.' },
      { label: "Obita's Mask", detail: '+40% Luck and +30% Gems; a 0.02% drop from Hidden Leaf Tower Floors 90+.' },
      { label: "Mazun's Coat", detail: '+50% Luck and 2x Cash; a 0.02% drop from Slayer Tower Floors 90+.' },
    ],
    references: [
      'https://progameguides.com/roblox/all-anime-dice-gear-stats-how-to-get/',
      'https://allthings.how/every-gear-in-anime-dice-and-how-to-get-them/',
    ],
  },
  {
    order: 8,
    id: 'towers',
    name: 'Anime Dice Towers Guide',
    description: 'Farm Gems, potions, Trait Rerolls, and exclusive Gear while testing team Damage and Health.',
    href: '#tower',
    displayType: 'step-by-step',
    highlights: [
      { label: '1', detail: 'Enter the Towers portal and select an available challenge.' },
      { label: '2', detail: 'Use Equip Best to field the strongest available lineup.' },
      { label: '3', detail: 'Enable Auto and Hide so cleared floors keep delivering rewards.' },
      { label: '4', detail: 'Farm Dragon, Cursed, Pirate, Hidden Leaf, and Slayer Towers for Gear.' },
      { label: '5', detail: 'Improve grades, traits, Damage, and Health when progression stalls.' },
    ],
    references: [
      'https://allthings.how/anime-dice-roblox-how-to-progress-fast-full-guide/',
      'https://progameguides.com/roblox/all-anime-dice-gear-stats-how-to-get/',
      'https://allthings.how/every-gear-in-anime-dice-and-how-to-get-them/',
    ],
  },
];
