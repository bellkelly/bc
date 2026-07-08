'use client'

import React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
  alpha,
  getContrastRatio,
} from '@mui/material'

const BLACK = '#212121'
const PURPLE = '#6A0DAD'
const GRAY = '#4A5568'
const LAVENDER_GRAY = '#DCD6E5'
const WHITE = '#F0F4F8'

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    customGradient: Palette['primary']
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
    customGradient?: PaletteOptions['primary']
  }
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      // Usage: The logo icon, hyperlinks, and key visual accents.
      main: PURPLE,
    },
    secondary: {
      // Usage: Sub-headings, footer text, or softening secondary text.
      main: GRAY,
    },
    tertiary: {
      // Usage: Call-out boxes, secondary borders, or graphic elements (not for text).
      main: alpha(LAVENDER_GRAY, 0.7),
      light: alpha(LAVENDER_GRAY, 0.9),
      dark: alpha(LAVENDER_GRAY, 0.3),
      contrastText: getContrastRatio(LAVENDER_GRAY, WHITE) > 4.5 ? 'WHITE' : 'BLACK',
    },
    customGradient: {
      main: 'linear-gradient(160deg, var(--mui-palette-primary-light) 0%, var(--mui-palette-primary-dark))',
    },
    common: {
      // Usage: Main text, headings, and logo lettering (standard version).
      black: BLACK,
      white: WHITE,
    },
    background: {
      default: WHITE,
      paper: LAVENDER_GRAY,
    },
    text: {
      primary: BLACK,
      secondary: GRAY,
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {},
    h6: {
      fontWeight: 400,
    },
    body1: {},
    body2: {
      color: GRAY,
    },
    overline: {
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: 1.25,
    },
    button: {
      letterSpacing: 1.25,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
    },
    // MuiList: { styleOverrides: { root: { listStyleType: 'none', padding: 0, margin: 0 } } },
    // MuiListItem: {
    //   styleOverrides: {
    //     root: {
    //       display: 'flex',
    //       alignItems: 'center',
    //       paddingLeft: 0,
    //       paddingRight: 0,
    //       '&::before': {
    //         content: '"•"',
    //         color: PURPLE,
    //         display: 'inline-block',
    //         marginRight: '8px',
    //         fontSize: '1.2em',
    //         lineHeight: 1,
    //       },
    //     },
    //   },
    // },
  },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
