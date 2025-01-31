import React from "react";
import { ReadMoreAboutMe } from "../../../ReadMoreAboutMe";

export const HomeHero = () => {
  return (
    <div
      className="
        w-full h-screen px-8 py-52
        bg-background dark:bg-background
      "
    >
      <div
        className="
          w-full h-full
          flex flex-col items-start justify-start gap-3
        "
      >
        <h1 className="text-6xl text-nowrap font-black">Abdullah Hasan</h1>
        <h2 className="text-4xl text-nowrap tracking-wide">
          I build things for web
        </h2>
        <ReadMoreAboutMe />
      </div>
    </div>
  );
};
