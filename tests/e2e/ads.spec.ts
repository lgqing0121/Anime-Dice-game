import { expect, test } from '@playwright/test';

test('monetized templates expose the approved ad inventory without Smartlink', async ({ request }) => {
  const expectations = [
    { path: '/en/', placements: ['top-banner', 'home-compact', 'home-native', 'sidebar-rectangle', 'wide-rail'] },
    { path: '/en/guide/', placements: ['top-banner', 'category-native', 'sidebar-rectangle', 'wide-rail'] },
    { path: '/en/codes/', placements: ['top-banner', 'category-native', 'sidebar-rectangle', 'wide-rail'] },
    { path: '/en/guide/anime-dice-guide/', placements: ['top-banner', 'article-native', 'sidebar-rectangle', 'wide-rail'] },
  ] as const;

  for (const expectation of expectations) {
    const html = await (await request.get(expectation.path)).text();
    for (const placement of expectation.placements) {
      expect(html, `${expectation.path} missing ${placement}`).toContain(`data-ad-placement="${placement}"`);
    }
    expect(html.match(/data-ad-global="social-bar"/g)).toHaveLength(1);
    expect(html.match(/data-ad-global="popunder"/g)).toHaveLength(1);
    expect(html).not.toContain('1c3838e94268f961bd33ecff04b5f0ae');
  }
});

test('responsive banner inventory contains one code per supported viewport size', async ({ request }) => {
  const html = await (await request.get('/en/')).text();
  const expectedKeys = [
    'ed61897adbabefe7983f3ffc1c0bfb13',
    'e40507feac6259ee5ec020c616ef8220',
    'f8aa1e7be1c73b875e0fe37ebdd6c71d',
    '75918c00e54fff5919aff04229377854',
    '13a793ae0c63d94a073f6094dd5c31ba',
    '77f188cab8e8814bd7dc6d4ee180295d',
  ];
  for (const key of expectedKeys) expect(html).toContain(key);
});

test('language gateway, legal pages, and error pages stay free of Adsterra placements', async ({ request }) => {
  for (const path of ['/', '/en/privacy/', '/en/terms/', '/missing-anime-dice-page/']) {
    const response = await request.get(path);
    const html = await response.text();
    expect(html, path).not.toContain('data-ad-placement=');
    expect(html, path).not.toContain('data-ad-global=');
    expect(html, path).not.toMatch(/<script[^>]+src=["'][^"']*(?:profitableratecpmnetwork|highrevenueformat)\.com/i);
  }
});

test('privacy pages disclose third-party advertising in every language', async ({ request }) => {
  for (const locale of ['en', 'pt-br', 'es', 'id']) {
    const html = await (await request.get(`/${locale}/privacy/`)).text();
    expect(html).toContain('data-advertising-disclosure="true"');
    expect(html).toContain('Google AdSense');
    expect(html).toContain('Adsterra');
  }
});
