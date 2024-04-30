import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { MenuProvider } from '@/contexts/menu-context'
import { AppContent } from '@/components/AppContent'

export const metadata: Metadata = {
  title: 'Elin',
  description: 'A photographers portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MenuProvider>
          <Header />
          <AppContent>{children}</AppContent>
        </MenuProvider>
      </body>
    </html>
  )
}
