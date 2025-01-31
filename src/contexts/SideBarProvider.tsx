'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

interface SideBarContextProps {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  closeSideBar: () => void;
  sideBarRef: React.RefObject<HTMLDivElement>;
}

const SideBarContext = createContext<SideBarContextProps | null>(null);

interface SideBarProviderProps {
  children: React.ReactNode;
}

export const SideBarProvider = ({ children }: SideBarProviderProps) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  }


  // handle for sidebar toggling when clicking outside sidebar
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
        setIsSideBarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleSideBar, closeSideBar, sideBarRef }}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error("useSideBarContext must be used within a SideBarProvider");
  }
  return context;
}
