import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL?.trim();
if (!site && process.argv.includes('build')) {
  throw new Error('SITE_URL is required for production builds');
}

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: site || undefined,
});
