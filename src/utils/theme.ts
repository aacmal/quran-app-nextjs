import { Theme } from '@stores/settingsStore';

export default function setTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#334155');
  } else if (
    theme === 'default' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#334155');
  } else {
    document.documentElement.classList.remove('dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#f1f5f9');
  }
}
