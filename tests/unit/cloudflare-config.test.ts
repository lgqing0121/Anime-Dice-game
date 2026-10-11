import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Cloudflare Workers deployment configuration', () => {
  it('deploys the generated Astro site as static assets with a real 404 page', () => {
    const config = JSON.parse(readFileSync('wrangler.jsonc', 'utf8'));

    expect(config.name).toBe('anime-dice-game');
    expect(config.assets).toEqual({
      directory: './dist',
      html_handling: 'force-trailing-slash',
      not_found_handling: '404-page',
    });
  });
});
