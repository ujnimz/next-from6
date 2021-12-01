import {useEffect, useState} from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : 'light', // light is the default theme
  );

  theme === 'light' ? 'light' : 'dark';
  const colorTheme =
    theme === 'undefined' ? 'light' : theme === 'light' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute('data-theme', colorTheme);
    //root.setAttribute('data-theme', theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
