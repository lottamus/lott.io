import React from 'react';
import { tw } from 'twind';

import { useTheme } from '../context/theme';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  const [theme] = useTheme();

  return (
    <div className={theme}>
      <div className={tw`text-gray-900 bg-gray-100 dark:(bg-black text-gray-300) flex flex-col`}>
        <Header />

        <main className={tw`container flex-1 px-4 mx-auto sm:px-8`}>{children}</main>
      </div>
    </div>
  );
};
