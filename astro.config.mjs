import { defineConfig } from 'astro/config';
import { assertProductionSite } from './src/config/production-origin';

const site = process.env.SITE_URL?.trim();
assertProductionSite(site, process.argv.includes('build'));

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: site || undefined,
});
