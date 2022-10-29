import React, { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const defaultTheme: [Theme, () => void] = ['dark', () => {}];

const ThemeContext = React.createContext(defaultTheme);

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme((window.localStorage.getItem('theme') as Theme) || 'dark');
  }, []);

  const switchTheme = React.useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  return <ThemeContext.Provider value={[theme, switchTheme]}>{children}</ThemeContext.Provider>;
};
