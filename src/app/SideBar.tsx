import { useSideBarContext } from "@/contexts/SideBarProvider";
import Link from "next/link";
import React from "react";

export const SideBar = () => {

  const { sideBarRef, closeSideBar } = useSideBarContext();

  return (
    <div
      className="
        absolute top-0 left-0 z-20
        w-full h-screen
        backdrop-blur backdrop-opacity-100
      "
    >
      <div
        ref={sideBarRef}
        className="
        w-2/6 h-full 
        bg-background dark:bg-background 
        float-right
        shadow-[inset 0 0 10px 5px rgba(255, 0, 0, 0.6)]
        "
      >
        <ul>
          <li>
            <Link href='#' className="menu-link pointer-events-none"></Link>
          </li>
          <li>
            <Link href='/' onClick={() => closeSideBar()} className="menu-link hover-effect">Home</Link>
          </li>
          <li>
            <Link href='/projects' onClick={() => closeSideBar()} className="menu-link hover-effect">Projects</Link>
          </li>
          <li>
            <Link href='/blog' onClick={() => closeSideBar()} className="menu-link hover-effect">Blog</Link>
          </li>
          <li>
            <Link href='/contacts' onClick={() => closeSideBar()} className="menu-link hover-effect">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

SideBar.displayName = "SideBar";
