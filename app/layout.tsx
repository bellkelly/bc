import type { Metadata } from 'next'
import React from 'react'

import Box from '@mui/material/Box'

import Footer from '@/app/components/Footer'
import AppBar from '@/app/components/AppBar'
import { ThemeProvider } from '@/app/providers/themeProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Brief Consulting',
  description:
    'Strategic analysis, advising, and solutions. For mission-driven, people-serving organizations — when you need it.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar />
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
