import { expect, test } from '@playwright/test';
import { GAME_FACTS } from '../../src/data/game';
import { EXPLORE_MODULES } from '../../src/data/modules';

const locales = [
  { route: 'en', lang: 'en', label: 'English', lastChecked: 'Last checked: Oct 5, 2026' },
  { route: 'pt-br', lang: 'pt-BR', label: 'Português do Brasil', lastChecked: 'Última verificação: 5 out 2026' },
  { route: 'es', lang: 'es', label: 'Español', lastChecked: 'Última revisión: 5 oct 2026' },
  { route: 'id', lang: 'id', label: 'Bahasa Indonesia', lastChecked: 'Terakhir dicek: 5 Okt 2026' },
] as const;

for (const locale of locales) {
  test(`${locale.route} renders the localized wiki shell`, async ({ page }, testInfo) => {
    const response = await page.goto(`/${locale.route}/`);

    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('[data-locale-label]')).toHaveText(locale.label);
    await expect(page.locator('[data-nav-link]')).toHaveCount(8);

    const heroImage = page.getByRole('img', { name: /Anime Dice/i });
    await expect(heroImage).toHaveAttribute('width', '500');
    await expect(heroImage).toHaveAttribute('height', '280');
    await expect(page.locator('[data-hero-action]')).toHaveCount(3);

    await expect(page.locator('[data-sidebar-nav] li')).toHaveCount(8);
    await expect(page.locator('[data-sidebar-count]')).toHaveText(['1', '7', '7', '8', '4', '4', '5', '4']);
    await expect(page.locator('[data-code-card]')).toHaveCount(2);
    await expect(page.getByText(locale.lastChecked, { exact: true })).toBeVisible();

    expect(await page.locator('[data-section-heading]').evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-section-heading')))).toEqual([
      'updates',
      'journey',
      'trending',
      'about',
      'explore',
      'faq',
      'final-cta',
    ]);

    await expect(page.locator('[data-journey-card]')).toHaveCount(4);
    await expect(page.locator('[data-explore-module]')).toHaveCount(8);
    expect(await page.locator('[data-explore-module]').evaluateAll((nodes) => nodes.map((node) => ({
      id: node.getAttribute('data-module-id'),
      display: node.getAttribute('data-display-type'),
    })))).toEqual(EXPLORE_MODULES.map((module) => ({ id: module.id, display: module.displayType })));

    await expect(page.locator('[data-about-fact]')).toHaveCount(9);
    await expect(page.locator('[data-about-facts]')).toContainText(GAME_FACTS.developer);
    await expect(page.locator('[data-about-facts]')).toContainText(GAME_FACTS.snapshot.visits);
    await expect(page.locator('[data-faq-item]')).toHaveCount(6);
    await expect(page.locator('[data-play-roblox]')).toHaveAttribute('href', GAME_FACTS.links.game);
    await expect(page.locator('[data-fan-disclaimer]')).toBeVisible();

    const internalHrefs = await page.locator('a[href^="/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')));
    expect(internalHrefs.every((href) => /^\/(en|pt-br|es|id)\/$/.test(href ?? ''))).toBe(true);

    if (testInfo.project.name === 'mobile') {
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
      const menuButton = page.locator('[data-menu-toggle]');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      await menuButton.focus();
      await page.keyboard.press('Enter');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      await expect(page.locator('[data-mobile-menu]')).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    }
  });
}

test('theme choice persists after reload', async ({ page }) => {
  await page.goto('/en/');
  await page.evaluate(() => localStorage.removeItem('theme'));
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('[data-theme-toggle]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('root gateway falls back safely and preserves an explicit choice', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, 'language', { configurable: true, value: 'zh-CN' }));
  await page.goto('/');
  await expect(page).toHaveURL(/\/en\/$/);
  await page.locator('.language-picker select').selectOption('es');
  await expect(page).toHaveURL(/\/es\/$/);
  await page.goto('/');
  await expect(page).toHaveURL(/\/es\/$/);
});

test('root gateway exposes locale links without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page.locator('[data-gateway-locales] a')).toHaveCount(4);
  await context.close();
});
