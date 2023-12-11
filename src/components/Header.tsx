import React from "react";

import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background">
      <nav className="container mx-auto h-16 max-w-6xl px-4 sm:px-8">
        <NavigationMobile />

        <NavigationDesktop />
      </nav>
    </header>
  );
};
