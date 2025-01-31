'use client';

import React, { cloneElement } from 'react'
import { useCardContext } from './CardContext'

interface CardProps {
  children: JSX.Element;
  page: number;
}

export const Card = ({ children, page }: CardProps) => {

  const { numberOfPages, currentPage } = useCardContext();

  const progress = Math.max(0, currentPage - page);

  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numberOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  console.log(progress);
  return (
    <div
      className='absolute top-0 w-full'
      style={{
        opacity,
        pointerEvents: progress >= 0 || progress >= 1 ? 'none' : undefined,
      }}
    >
      {cloneElement(children, {
        progress: progress,
        opacity: opacity,
      })}
    </div>
  )
}
