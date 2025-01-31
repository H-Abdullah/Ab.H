"use client";

import { useScrollProvider } from "@/contexts/ScrollProvider";
import React, { useRef } from "react";

function opacityForTexts(sectionProgress: number, textIndex: number) {
  const progress = sectionProgress - textIndex;

  if (progress >= 0 && progress < 1) {
    return 1;
  }

  return 0.1;
}

export const HomeAboutHero = () => {
  const { scrollY } = useScrollProvider();

  const texts = [
    { id: 0, content: "I love coding." },
    {
      id: 1,
      content:
        "I use my passion and skills to build digital products and experiences.",
    },
    {
      id: 2,
      content:
        "I am passionate about cutting-edge, pixel perfect UI and intuitively implemented UX.",
    },
  ];

  const refContainer = useRef<HTMLDivElement | null>(null);
  const numberOfTexts = texts.length;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfScreenH = screenH / 2;

    const percentY =
      Math.min(
        clientHeight + halfScreenH,
        Math.max(-screenH, scrollY - offsetTop) + halfScreenH
      ) / clientHeight;

    progress = Math.min(
      numberOfTexts - 0.5,
      Math.max(0.5, percentY * numberOfTexts)
    );
  }

  return (
    <div
      ref={refContainer}
      className="
        w-full h-screen px-10 py-44
        bg-foreground dark:bg-foreground
        text-background dark:text-background
      "
    >
      <div
        className="
          w-full h-full
          flex flex-col items-start justify-center gap-2
        "
      >
        {texts.map((text) => (
          <p
            key={text.id}
            data-index={text.id}
            className="text-intro"
            style={{
              opacity: opacityForTexts(progress, text.id),
            }}
          >
            {text.content}
          </p>
        ))}
      </div>
    </div>
  );
};
