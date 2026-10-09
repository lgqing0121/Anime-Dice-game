const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');

function currentTheme(): 'dark' | 'light' {
  return root.dataset.theme === 'light' ? 'light' : 'dark';
}

function syncThemeControl() {
  themeButton?.setAttribute('aria-pressed', String(currentTheme() === 'light'));
}

themeButton?.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
  syncThemeControl();
});

syncThemeControl();
