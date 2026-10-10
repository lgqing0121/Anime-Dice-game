document.querySelectorAll<HTMLElement>('[data-locale-choice]').forEach((control) => {
  control.addEventListener('click', () => {
    const locale = control.dataset.localeChoice;
    if (!locale) return;
    try { localStorage.setItem('preferredLocale', locale); } catch {}
  });
});

document.querySelectorAll<HTMLSelectElement>('[data-locale-select]').forEach((select) => {
  select.addEventListener('change', () => {
    try { localStorage.setItem('preferredLocale', select.value); } catch {}
    location.href = `/${select.value}/`;
  });
});
