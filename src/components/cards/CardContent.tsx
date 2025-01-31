import React from 'react'

interface CardContentProps {
  children?: React.ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className='sticky top-0 h-screen overflow-hidden'>
      {children}
    </div>
  )
}
