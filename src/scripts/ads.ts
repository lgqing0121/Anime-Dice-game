const PRODUCTION_HOST = 'www.animedicegamei.wiki';
const BANNER_HOST = 'https://www.highrevenueformat.com';
const NATIVE_SRC = 'https://pl31774209.profitableratecpmnetwork.com/5eeea7029bf2ad75a55091411c46de30/invoke.js';

interface BannerUnit { minWidth: number; minHeight?: number; width: number; height: number; key: string }

function bannerDocument(unit: BannerUnit): string {
  const options = JSON.stringify({ key: unit.key, format: 'iframe', height: unit.height, width: unit.width, params: {} });
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width"></head><body style="margin:0;overflow:hidden"><script>atOptions=${options}<\/script><script src="${BANNER_HOST}/${unit.key}/invoke.js"><\/script></body></html>`;
}

function mountBanners(): void {
  document.querySelectorAll<HTMLElement>('[data-ad-inventory]').forEach((slot) => {
    const inventory = JSON.parse(slot.dataset.adInventory ?? '[]') as BannerUnit[];
    const unit = inventory.find((candidate) => innerWidth >= candidate.minWidth && innerHeight >= (candidate.minHeight ?? 0));
    if (!unit) return;
    const frame = document.createElement('iframe');
    frame.className = 'ad-frame';
    frame.title = slot.getAttribute('aria-label') ?? 'Advertisement';
    frame.width = String(unit.width);
    frame.height = String(unit.height);
    frame.loading = 'lazy';
    frame.setAttribute('scrolling', 'no');
    frame.srcdoc = bannerDocument(unit);
    slot.querySelector('span')?.remove();
    slot.append(frame);
    slot.style.setProperty('--ad-width', `${unit.width}px`);
    slot.style.setProperty('--ad-height', `${unit.height}px`);
    slot.dataset.adLoaded = `${unit.width}x${unit.height}`;
  });
}

function appendScript(src: string, attributes: Record<string, string> = {}): void {
  const script = document.createElement('script');
  script.src = src;
  for (const [name, value] of Object.entries(attributes)) script.setAttribute(name, value);
  document.body.append(script);
}

function mountNative(): void {
  if (document.querySelector('[data-ad-placement$="-native"]')) appendScript(NATIVE_SRC, { async: 'async', 'data-cfasync': 'false' });
}

function mountGlobalUnits(): void {
  document.querySelectorAll<HTMLElement>('[data-ad-global][data-ad-src]').forEach((marker) => {
    if (marker.dataset.adLoaded === 'true') return;
    marker.dataset.adLoaded = 'true';
    appendScript(marker.dataset.adSrc!);
  });
}

if (location.hostname === PRODUCTION_HOST) {
  mountBanners();
  mountNative();
  window.addEventListener('load', mountGlobalUnits, { once: true });
}
