'use client'

import { ThemeProvider } from 'next-themes'
import DarkModeToggle from '../components/DarkModeToggle'
import PageContent from '../components/PageContent'

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="fixed top-4 right-4 z-50">
          <DarkModeToggle />
        </header>
        <PageContent />
      </div>
    </ThemeProvider>
  )
}
