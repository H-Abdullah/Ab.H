'use client';

import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { useSideBarContext } from "@/contexts/SideBarProvider";
import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useEffect } from "react";
import { SideBar } from "./SideBar";
import { useLenis } from "lenis/react";

export const NavBar = () => {

  const { isSideBarOpen, toggleSideBar } = useSideBarContext();
  
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
      {isSideBarOpen && <SideBar />}
    </nav>
  );
};
