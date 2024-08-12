'use client'

import { useMenu } from '@/contexts/menu-context'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ReactNode } from 'react'

export function AppContent({ children }: { children: ReactNode }) {
  const { isOpen } = useMenu()
  const mediaQuery = useMediaQuery('(max-width: 640px)')
  return (
    <div className={`${isOpen && mediaQuery.isMobile ? 'blur blur-background' : 'blur-background'}`}>
      {children}
    </div>
  )
}
