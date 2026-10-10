import { describe, expect, it } from 'vitest';
import { PRODUCTION_ORIGIN, assertProductionSite } from '../../src/config/production-origin';

describe('production origin contract', () => {
  it('accepts only the approved HTTPS origin for production builds', () => {
    expect(PRODUCTION_ORIGIN).toBe('https://animedicegamei.wiki');
    expect(assertProductionSite('https://animedicegamei.wiki/', true)).toBe('https://animedicegamei.wiki/');
    expect(() => assertProductionSite(undefined, true)).toThrow(/SITE_URL/);
    expect(() => assertProductionSite('http://animedicegamei.wiki', true)).toThrow(/animedicegamei/);
    expect(() => assertProductionSite('https://wrong.example', true)).toThrow(/animedicegamei/);
    expect(assertProductionSite('http://localhost:4321', false)).toBe('http://localhost:4321');
  });
});
