import { describe, expect, it } from 'vitest';
import { NAV_ITEMS } from '../../src/config/navigation';
import { GAME_FACTS } from '../../src/data/game';
import { EXPLORE_MODULES } from '../../src/data/modules';
import { validateFacts } from '../../src/lib/validation';

const approvedModuleNames = [
  'Anime Dice Codes',
  'Anime Dice Beginner Guide',
  'Anime Dice Tier List',
  'Anime Dice Dice List',
  'Anime Dice Traits Guide',
  'Anime Dice Rebirth Guide',
  'Anime Dice Gears Guide',
  'Anime Dice Towers Guide',
];

describe('shared Anime Dice facts', () => {
  it('keeps the approved module order and navigation counts', () => {
    expect(EXPLORE_MODULES.map((module) => module.name)).toEqual(approvedModuleNames);
    expect(NAV_ITEMS.map((item) => item.count)).toEqual([1, 7, 7, 8, 4, 4, 5, 4]);
  });

  it('publishes only the two conservative sidebar codes with an ISO review date', () => {
    expect(GAME_FACTS.reviewDate).toBe('2026-10-05');
    expect(GAME_FACTS.sidebarCodes).toEqual([
      { code: 'UPDATE7', reward: 'UPD 7 free reward bundle', status: 'Active' },
      {
        code: 'UPDATE6',
        reward: 'Lucky Spins, Trait Rerolls, Tickets and Gems',
        status: 'Active',
      },
    ]);
  });

  it('contains no unsafe intent in visitor-visible factual strings', () => {
    const visible = JSON.stringify({
      facts: GAME_FACTS,
      modules: EXPLORE_MODULES.map(({ references: _references, ...module }) => module),
      navigation: NAV_ITEMS,
    });

    expect(visible).not.toMatch(/\b(?:hack|exploit|injection|script|keyless|autofarm|auto farm)\b/i);
  });

  it('uses HTTPS for every official and editorial reference URL', () => {
    const urls = [
      ...Object.values(GAME_FACTS.links),
      ...EXPLORE_MODULES.flatMap((module) => module.references),
    ];

    expect(urls.length).toBeGreaterThan(8);
    expect(urls.every((url) => url.startsWith('https://'))).toBe(true);
  });

  it('accepts the approved dataset and rejects realistic integrity regressions', () => {
    expect(validateFacts()).toEqual([]);

    const wrongOrder = [...EXPLORE_MODULES].reverse();
    expect(validateFacts({ modules: wrongOrder })).toContain('Explore module order is invalid');

    const insecureFacts = {
      ...GAME_FACTS,
      links: { ...GAME_FACTS.links, game: 'http://example.test/game' },
    };
    expect(validateFacts({ facts: insecureFacts })).toContain('All source URLs must use HTTPS');

    expect(validateFacts({ facts: { ...GAME_FACTS, developer: '' } })).toContain('Developer is required');
    expect(validateFacts({ facts: { ...GAME_FACTS, currentUpdate: '' } })).toContain('Current update is required');
  });
});
