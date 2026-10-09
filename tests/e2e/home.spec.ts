import { expect, test } from '@playwright/test';

const locales = [
  { route: 'en', lang: 'en', label: 'English', lastChecked: 'Last checked: Oct 5, 2026' },
  { route: 'pt-br', lang: 'pt-BR', label: 'Português do Brasil', lastChecked: 'Última verificação: 5 out 2026' },
  { route: 'es', lang: 'es', label: 'Español', lastChecked: 'Última revisión: 5 oct 2026' },
  { route: 'id', lang: 'id', label: 'Bahasa Indonesia', lastChecked: 'Terakhir dicek: 5 Okt 2026' },
] as const;

for (const locale of locales) {
  test(`${locale.route} renders the localized wiki shell`, async ({ page }) => {
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
  });
}
