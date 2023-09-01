"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-md flex items-center justify-center w-10 h-10 text-yellow-400 cursor-pointer select-none hover:text-yellow-500 transition-colors duration-150 text-2xl"
      data-splitbee-event="Toggle Mode"
      data-splitbee-event-type={theme === "light" ? "dark" : "light"}
      title="Theme"
    >
      <span className="sr-only">Toggle mode</span>

      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} fixedWidth />
    </button>
  );
}
