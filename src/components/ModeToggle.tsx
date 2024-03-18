"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

import { Icon } from "./Icon";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex cursor-pointer select-none items-center justify-center rounded-md text-2xl text-yellow-400 transition-colors duration-150 hover:text-yellow-500"
      title="Theme"
    >
      <span className="sr-only">Toggle mode</span>

      <Icon className="block h-5 w-5 dark:hidden" icon={faMoon} fixedWidth />
      <Icon className="hidden h-5 w-5 dark:block" icon={faSun} fixedWidth />
    </button>
  );
}
