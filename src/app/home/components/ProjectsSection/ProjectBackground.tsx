import React from 'react'

export const ProjectBackground = () => {
  return (
    <div className='sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2'>
      <div className='h-[30vh] bg-foreground lg:h-auto'></div>
      <div className='h-[70vh] bg-background lg:h-auto'></div>
    </div>
  )
}
