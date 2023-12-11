"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

import { Icon } from "./Icon";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-md text-2xl text-yellow-400 transition-colors duration-150 hover:text-yellow-500"
      data-splitbee-event="Toggle Mode"
      data-splitbee-event-type={theme === "light" ? "dark" : "light"}
      title="Theme"
    >
      <span className="sr-only">Toggle mode</span>

      <Icon icon={theme === "light" ? faSun : faMoon} fixedWidth />
    </button>
  );
}
