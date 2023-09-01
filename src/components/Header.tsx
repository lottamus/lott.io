import React from "react";

import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";

export const Header = () => {
  return (
    <header className="inset-x-0 top-0 z-50 fixed bg-background">
      <nav className="container px-4 h-16 max-w-6xl mx-auto sm:px-8">
        <NavigationMobile />

        <NavigationDesktop />
      </nav>
    </header>
  );
};
