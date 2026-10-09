import { NAV_ITEMS, type NavigationItem } from '../config/navigation';
import { GAME_FACTS, type GameFacts } from '../data/game';
import { EXPLORE_MODULES, type ExploreModule } from '../data/modules';

interface ValidationInput {
  facts?: GameFacts;
  modules?: ExploreModule[];
  navigation?: NavigationItem[];
}

const APPROVED_MODULE_ORDER = [
  'Anime Dice Codes',
  'Anime Dice Beginner Guide',
  'Anime Dice Tier List',
  'Anime Dice Dice List',
  'Anime Dice Traits Guide',
  'Anime Dice Rebirth Guide',
  'Anime Dice Gears Guide',
  'Anime Dice Towers Guide',
];

const FORBIDDEN_INTENT = /\b(?:hack|exploit|injection|script|keyless|autofarm|auto farm)\b/i;

export function validateFacts(input: ValidationInput = {}): string[] {
  const facts = input.facts ?? GAME_FACTS;
  const modules = input.modules ?? EXPLORE_MODULES;
  const navigation = input.navigation ?? NAV_ITEMS;
  const errors: string[] = [];

  if (JSON.stringify(modules.map((module) => module.name)) !== JSON.stringify(APPROVED_MODULE_ORDER)) {
    errors.push('Explore module order is invalid');
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(facts.reviewDate)) {
    errors.push('Review date must use ISO format');
  }

  if (facts.sidebarCodes.length !== 2 || facts.sidebarCodes[0]?.code !== 'UPDATE7' || facts.sidebarCodes[1]?.code !== 'UPDATE6') {
    errors.push('Sidebar codes must match the conservative approved list');
  }

  const urls = [
    ...Object.values(facts.links),
    ...modules.flatMap((module) => module.references),
  ];
  if (urls.some((url) => !url.startsWith('https://'))) {
    errors.push('All source URLs must use HTTPS');
  }

  const navigationIds = navigation.map((item) => item.id);
  if (new Set(navigationIds).size !== navigationIds.length) {
    errors.push('Navigation anchors must be unique');
  }

  const visibleModules = modules.map(({ references: _references, ...module }) => module);
  if (FORBIDDEN_INTENT.test(JSON.stringify({ facts, modules: visibleModules, navigation }))) {
    errors.push('Visitor-visible data contains forbidden intent');
  }

  return errors;
}
