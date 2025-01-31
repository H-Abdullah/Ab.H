import React from 'react'

interface ProjectContainerProps {
  children: React.ReactNode;
}

export const ProjectContainer = ({ children }: ProjectContainerProps) => {

  return (
    <div
      className='grid min-h-screen w-full grid-cols-1 lg:grid-cols-2'
    >
      {children}
    </div>
  )
}
