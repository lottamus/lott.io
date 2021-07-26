import { useDarkMode } from 'next-dark-mode';
import React from 'react';
import { tw } from 'twind';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  const {
    darkModeActive, // boolean - whether the dark mode is active or not
  } = useDarkMode();

  return (
    <div className={darkModeActive ? 'dark' : 'light'}>
      <div className={tw`text-gray-900 bg-white dark:(bg-gray-900 text-white) flex flex-col`}>
        <Header />

        <main className={tw`container flex-1 pt-16 mx-auto`}>{children}</main>

        <Footer />
      </div>
    </div>
  );
};
