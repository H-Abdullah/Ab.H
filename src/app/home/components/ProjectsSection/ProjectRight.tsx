import React from 'react'
import { ProjectLeftRightProps } from './ProjectLeft'

export const ProjectRight = ({ children, progress }: ProjectLeftRightProps) => {

  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className='flex h-screen flex-1 justify-center lg:items-center'
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div
        className='w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0'
      >
        {children}
      </div>
    </div>
  )
}
