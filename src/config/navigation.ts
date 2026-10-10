import type { CategoryId } from '../content/types';
import { CATEGORIES } from '../data/categories';

export interface NavigationItem { id: CategoryId; label: string; count: number; anchor: string }
const anchors: Record<CategoryId, string> = {
  codes: 'codes', guide: 'beginner-guide', units: 'units', progression: 'progression',
  tower: 'towers', trading: 'trading', updates: 'updates', community: 'community',
};
const labels: Record<CategoryId, string> = {
  codes: 'Codes', guide: 'Guide', units: 'Units', progression: 'Progression',
  tower: 'Tower', trading: 'Trading', updates: 'Updates', community: 'Community',
};
export const NAV_ITEMS: NavigationItem[] = CATEGORIES.map((category) => ({
  id: category.id, label: labels[category.id], count: category.articleIds.length, anchor: anchors[category.id],
}));
