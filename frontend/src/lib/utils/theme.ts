export function initTheme() {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');

  const storedTheme = localStorage.getItem('delinte-theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.setAttribute('data-theme', storedTheme);
  }

  themeToggle?.addEventListener('click', () => {
    const next =
      root.getAttribute('data-theme') === 'light'
        ? 'dark'
        : 'light';

    root.setAttribute('data-theme', next);
    localStorage.setItem('delinte-theme', next);
  });
}