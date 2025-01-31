'use client';

import { useLenis } from "lenis/react";
import { createContext, useContext, useState } from "react";

interface ScrollContextProps {
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollY, setScrollY] = useState(0);

  useLenis(({ scroll }) => {
    setScrollY(scroll);
  });

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollProvider = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollProvider hook need to be used within ScrollProvider wrapper"
    );
  }
  return context;
};
