"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  // Default to light mode for server-rendering
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedMode === "true" || (!savedMode && prefersDark));
  }, []);

  useLayoutEffect(() => {
    const themeBtn = document.querySelector('#theme-toggle');
    if (themeBtn) {
      themeBtn.setAttribute('checked', `"${isDarkMode}"`);
    }
  }, [isDarkMode]);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  // Apply mode class on initial load based on isDarkMode bool
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
