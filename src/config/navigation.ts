export interface NavigationItem {
  id: 'codes' | 'guide' | 'units' | 'progression' | 'tower' | 'trading' | 'updates' | 'community';
  label: string;
  count: number;
}

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'codes', label: 'Codes', count: 1 },
  { id: 'guide', label: 'Guide', count: 7 },
  { id: 'units', label: 'Units', count: 7 },
  { id: 'progression', label: 'Progression', count: 8 },
  { id: 'tower', label: 'Tower', count: 4 },
  { id: 'trading', label: 'Trading', count: 4 },
  { id: 'updates', label: 'Updates', count: 5 },
  { id: 'community', label: 'Community', count: 4 },
];
