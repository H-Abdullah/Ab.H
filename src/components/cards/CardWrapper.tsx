'use client';

import React, { useRef } from 'react'
import { CardContext } from './CardContext';
import { useScrollProvider } from '@/contexts/ScrollProvider';

interface CardWrapperProps {
  children: React.ReactNode;
  numberOfPages: number;
}

export const CardWrapper = ({ children, numberOfPages }: CardWrapperProps) => {

  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useScrollProvider();

  let currentPage = 0;
  const elContainer = refContainer.current;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;

    const screenH = window.innerHeight;
    const halfScreenH = screenH / 2;
    const percentY = Math.min(clientHeight + halfScreenH, Math.max(-screenH, scrollY - offsetTop) + halfScreenH) / clientHeight;

    currentPage = percentY * numberOfPages;
    console.log(currentPage);
  }

  return (
    <CardContext.Provider value={{ numberOfPages, currentPage }}>
      <div
        ref={refContainer}
        className='relative z-10 bg-background dark:bg-background'
        style={{ height: numberOfPages * 100 + 'vh' }}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
}
