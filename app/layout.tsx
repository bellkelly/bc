import type { Metadata } from 'next'
import React from 'react'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import Footer from '@/app/components/Footer'
import AppBar from '@/app/components/AppBar'
import { ThemeProvider } from '@/app/providers/themeProvider'
import ScrollToTop from '@/app/components/ScrollToTop'

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
          <ScrollToTop />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '22rem' }}
          >
            <AppBar>
              <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Toolbar />
                {children}
              </Box>
            </AppBar>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
