export interface NavigationItem {
  id: 'codes' | 'guide' | 'units' | 'progression' | 'tower' | 'trading' | 'updates' | 'community';
  label: string;
  count: number;
  anchor: string;
}

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'codes', label: 'Codes', count: 1, anchor: 'codes' },
  { id: 'guide', label: 'Guide', count: 7, anchor: 'beginner-guide' },
  { id: 'units', label: 'Units', count: 7, anchor: 'units' },
  { id: 'progression', label: 'Progression', count: 8, anchor: 'progression' },
  { id: 'tower', label: 'Tower', count: 4, anchor: 'towers' },
  { id: 'trading', label: 'Trading', count: 4, anchor: 'trading' },
  { id: 'updates', label: 'Updates', count: 5, anchor: 'updates' },
  { id: 'community', label: 'Community', count: 4, anchor: 'community' },
];
