'use client'

import Link from 'next/link'
import React from 'react'

import { useScrollTrigger } from '@mui/material'
import { default as MUIAppBar } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { default as MuiLink } from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

interface ElevationScrollProps {
  children?: React.ReactElement<{ elevation?: number }>
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return children ? React.cloneElement(children, { elevation: trigger ? 4 : 1 }) : null
}

const AppBar = () => {
  const theme = useTheme()

  return (
    <ElevationScroll>
      <MUIAppBar
        component="header"
        position="sticky"
        elevation={1}
        sx={{ bgcolor: 'common.white', color: 'primary.main' }}
      >
        <Toolbar sx={{ maxWidth: theme.breakpoints.values.lg, mx: 'auto', width: '100%' }}>
          <Link href="/">
            <Box component="img" src="/logo.svg" alt="Brief Consulting" height={56} width={85} />
          </Link>
          <Box sx={{ ml: 'auto', display: 'flex', gap: { xs: 3, md: 4 }, alignItems: 'center' }}>
            <Button
              component={MuiLink}
              href="/#hero"
              sx={{ my: 2, color: 'primary', display: { xs: 'none', sm: 'block' } }}
            >
              Home
            </Button>
            <Button
              component={MuiLink}
              href="/#about"
              sx={{ my: 2, color: 'primary', display: { xs: 'none', sm: 'block' } }}
            >
              About
            </Button>
            <Button
              component={MuiLink}
              href="/#services"
              sx={{ my: 2, color: 'primary', display: { xs: 'none', sm: 'block' } }}
            >
              Services
            </Button>
            <Button variant="contained" component={MuiLink} href="/#contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </ElevationScroll>
  )
}

export default AppBar
