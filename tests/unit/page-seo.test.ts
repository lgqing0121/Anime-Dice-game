import{describe,expect,it}from'vitest';import{buildPageJsonLd,buildPageSeo,getIndexableRoutes}from'../../src/lib/seo';
const origin='https://animedicegamei.wiki';
describe('route-aware page SEO',()=>{
 it('builds article canonical and reciprocal equivalents',()=>{const page={kind:'article',article:'anime-dice-codes'}as const;const seo=buildPageSeo(page,'es',origin);expect(seo.canonical).toBe(`${origin}/es/codes/anime-dice-codes/`);expect(seo.alternates).toHaveLength(5);expect(seo.alternates.at(-1)).toEqual({hrefLang:'x-default',href:`${origin}/en/codes/anime-dice-codes/`});});
 it('builds Article, breadcrumb, and FAQ structured data',()=>{const graph=buildPageJsonLd({kind:'article',article:'anime-dice-codes'},'en',origin);expect(graph.map(node=>node['@type'])).toContain('Article');expect(graph.map(node=>node['@type'])).toContain('BreadcrumbList');expect(graph.map(node=>node['@type'])).toContain('FAQPage');});
 it('enumerates exactly 196 primary localized routes',()=>{const routes=getIndexableRoutes();expect(routes).toHaveLength(196);expect(new Set(routes).size).toBe(196);expect(routes).not.toContain('/');expect(routes.some(route=>route.includes('privacy'))).toBe(false);});
});