import ReactLenis from 'lenis/react'
import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ScrollProvider } from './ScrollProvider'
import { SideBarProvider } from './SideBarProvider'
import { NavBar } from '@/app/NavBar'

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReactLenis root>
      <ThemeProvider>
        <ScrollProvider>
          <SideBarProvider>
            <NavBar />
            {children}
          </SideBarProvider>
        </ScrollProvider>
      </ThemeProvider>
    </ReactLenis>
  )
}
