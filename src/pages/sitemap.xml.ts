import type { APIRoute } from 'astro';
import { SUPPORTED_LOCALES } from '../config/site';
import { GAME_FACTS } from '../data/game';

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const origin = (site?.origin ?? url.origin).replace(/\/$/, '');
  const entries = SUPPORTED_LOCALES.map((locale) =>
    `  <url><loc>${origin}/${locale}/</loc><lastmod>${GAME_FACTS.reviewDate}</lastmod></url>`,
  ).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
