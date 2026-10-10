import { expect, test } from '@playwright/test';
import { SUPPORTED_LOCALES, localeToHrefLang } from '../../src/config/site';

const publicOrigin = 'https://anime-dice.test';

test('sitemap and robots expose only the four localized homepages', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()['content-type']).toMatch(/^(?:application|text)\/xml/);
  const xml = await sitemap.text();
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  expect(locations).toEqual(SUPPORTED_LOCALES.map((locale) => `${publicOrigin}/${locale}/`));

  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${publicOrigin}/sitemap.xml`);
});

for (const locale of SUPPORTED_LOCALES) {
  test(`${locale} metadata, structured data, assets, and internal links are crawlable`, async ({ page, request }) => {
    await page.goto(`/${locale}/`);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${publicOrigin}/${locale}/`);
    const alternates = await page.locator('link[rel="alternate"]').evaluateAll((links) => links.map((link) => ({
      lang: link.getAttribute('hreflang'),
      href: link.getAttribute('href'),
    })));
    expect(alternates).toEqual([
      ...SUPPORTED_LOCALES.map((item) => ({ lang: localeToHrefLang(item), href: `${publicOrigin}/${item}/` })),
      { lang: 'x-default', href: `${publicOrigin}/en/` },
    ]);
    await expect(page.locator('main h1')).toHaveCount(1);

    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    const graph = JSON.parse(jsonLd ?? '[]') as Array<Record<string, unknown>>;
    const faq = graph.find((node) => node['@type'] === 'FAQPage') as { mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }> };
    const visibleFaq = await page.locator('[data-faq-item]').evaluateAll((items) => items.map((item) => ({
      name: item.querySelector('summary')?.textContent?.replace(/\+$/, '').trim(),
      text: item.querySelector('p')?.textContent?.trim(),
    })));
    expect(faq.mainEntity.map((item) => ({ name: item.name, text: item.acceptedAnswer.text }))).toEqual(visibleFaq);

    const imageSources = await page.locator('img[src]').evaluateAll((images) => images.map((image) => image.getAttribute('src')));
    expect(imageSources.length).toBeGreaterThan(0);
    for (const source of imageSources) {
      expect(source).toMatch(/^\//);
      expect((await request.get(source!)).status()).toBeLessThan(400);
    }

    const internalPaths = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute('href')).filter(Boolean))] as string[]);
    expect(internalPaths.every((href) => /^\/(en|pt-br|es|id)\/$/.test(href))).toBe(true);
    for (const href of internalPaths) expect((await request.get(href)).status()).toBeLessThan(400);
  });
}
