'use client'

import { useMenu } from '@/contexts/menu-context'
import { ReactNode } from 'react'

export function AppContent({ children }: { children: ReactNode }) {
  const { isOpen } = useMenu()
  return (
    <div className={`${isOpen ? 'blur blur-background' : 'blur-background'}`}>
      {children}
    </div>
  )
}
