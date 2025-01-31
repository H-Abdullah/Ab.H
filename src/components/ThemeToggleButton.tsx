'use client';

import { useTheme } from "@/contexts/ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";

export const ThemeToggleButton = () => {

  const { isDarkMode, toggleDarkMode } = useTheme();
  const toggleTheme: () => void = toggleDarkMode;
  const currMode: boolean = isDarkMode;

  return (
    <label
      htmlFor="theme-toggle"
      className="
        relative 
        flex items-center 
        w-16 h-8 
        bg-gray-300 dark:bg-gray-700 
        rounded-full cursor-pointer 
        transition-colors duration-300
      "
    >
      {/* Toggle Thumb */}
      <input
        id="theme-toggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        disabled={isDarkMode === null}
        className="sr-only"
      />
      <span
        className={`
          absolute top-1 left-1 
          w-6 h-6 
          bg-yellow-400 dark:bg-gray-900 
          rounded-full 
          transition-transform duration-300 
          ${ currMode ? "translate-x-8" : ""}
        `}
      ></span>

      {/* Sun and Moon Icons */}
      <SunIcon
        className={`
          absolute 
          w-5 h-5 
          text-yellow-800 
          transition-opacity duration-300 
          ${ currMode ? "opacity-0" : "opacity-100"}
        `}
        style={{ left: "6px" }}
      />
      <MoonIcon
        className={`
          absolute 
          w-5 h-5 
          text-gray-100 
          transition-opacity duration-300 
          ${ currMode ? "opacity-100" : "opacity-0"}
        `}
        style={{ right: "6px" }}
      />
    </label>
  );
};
