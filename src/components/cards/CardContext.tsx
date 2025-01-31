'use client';

import { createContext, useContext } from "react";

interface CardContextProps {
  numberOfPages: number;
  currentPage: number;
}

export const CardContext = createContext<CardContextProps>({
  numberOfPages: 0,
  currentPage: 0,
});

export const useCardContext = () => {
  const context = useContext(CardContext);
  
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }

  return context;
}