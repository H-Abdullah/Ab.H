import { NavBar } from '@/app/NavBar';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLenis } from 'lenis/react';
import React, { createContext, useEffect, useRef, useState } from 'react'

const NavBarContext = createContext(null);

interface NavBarProps {
  children: React.ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProps) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const sideBarRef = useRef<HTMLDivElement>(null);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  // handle for sidebar toggling when clicking outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setIsSideBarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const lenis = useLenis(); // Access the Lenis instance

  // handler for sidebar scrolling
  useEffect(() => {
    if (lenis) {
      if (isSideBarOpen) {
        lenis.stop(); // Stops scrolling
      } else {
        lenis.start(); // Resumes scrolling
      }
    }
  }, [isSideBarOpen, lenis]); // Re-run when sidebar state changes or lenis initializes
  return (
    <NavBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      <nav
        className="
          absolute top-0 left-0 space-x-4
          w-screen h-[12%] px-5
          flex flex-row justify-end items-center
          bg-background dark:bg-background
        "
      >
        <ThemeToggleButton />
        <button onClick={toggleSideBar}>
          <Bars3Icon className="size-7 text-foreground"/>
        </button>
      </nav>
    </NavBarContext.Provider>
  )
}
