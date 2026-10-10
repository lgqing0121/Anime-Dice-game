export const PRODUCTION_ORIGIN = 'https://animedicegamei.wiki';

export function assertProductionSite(site: string | undefined, isBuild: boolean): string | undefined {
  if (!isBuild) return site;
  let origin: string | undefined;
  try { origin = site ? new URL(site).origin : undefined; } catch {}
  if (origin !== PRODUCTION_ORIGIN) {
    throw new Error(`SITE_URL must be ${PRODUCTION_ORIGIN} for production builds`);
  }
  return site;
}
