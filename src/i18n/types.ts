import type { NavigationItem } from '../config/navigation';

export interface HomeCopy {
  localeName: string;
  common: {
    primaryNavigation: string; mobileNavigation: string; advertisement: string;
    active: string; wiki: string; links: string; gameSnapshot: string;
  };
  meta: { title: string; description: string };
  nav: Record<NavigationItem['id'], string>;
  a11y: { openMenu: string; closeMenu: string; toggleTheme: string; language: string };
  hero: {
    eyebrow: string;
    title: 'Anime Dice';
    description: string;
    stats: string[];
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    videoLabel: string;
    reviewedLabel: string;
  };
  updates: { eyebrow: string; title: string; items: Array<{ tag: string; date: string; title: string }>; browse: string };
  journey: { eyebrow: string; title: string; cards: Array<{ number: string; title: string; description: string }> };
  trending: { eyebrow: string; title: string; items: string[] };
  about: { title: string; paragraphs: string[]; statLabels: string[]; genreValue: string; playersLabel: string; cta: string };
  modules: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ id: string; name: string; description: string; highlights: string[] }>;
  };
  faq: { eyebrow: string; title: string; subtitle: string; items: Array<{ question: string; answer: string }> };
  finalCta: { title: string; description: string; primary: string; secondary: string };
  sidebar: { title: string; activeCodes: string; lastChecked: string; viewAll: string };
  footer: { about: string; description: string; play: string; discord: string; video: string; disclaimer: string };
}
