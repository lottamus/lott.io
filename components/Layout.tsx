import { useDarkMode } from 'next-dark-mode';
import React from 'react';
import { tw } from 'twind';

import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  const { autoModeActive, darkModeActive } = useDarkMode();
  const darkMode = darkModeActive || autoModeActive;

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className={tw`text-gray-900 bg-gray-100 dark:(bg-black text-white) flex flex-col`}>
        <Header />

        <main className={tw`container flex-1 mx-auto px-8`}>{children}</main>
      </div>
    </div>
  );
};
