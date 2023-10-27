import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { type ReactNode } from 'react'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ThemeProvider from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={cn(open_sans.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
