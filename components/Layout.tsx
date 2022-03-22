import { useDarkMode } from 'next-dark-mode';
import React from 'react';
import { tw } from 'twind';

import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  const {
    darkModeActive, // boolean - whether the dark mode is active or not
  } = useDarkMode();

  return (
    <div className={darkModeActive ? 'dark' : 'light'}>
      <div className={tw`text-gray-900 bg-gray-100 dark:(bg-black text-white) flex flex-col`}>
        <Header />

        <main className={tw`container flex-1 mx-auto px-8`}>{children}</main>
      </div>
    </div>
  );
};
