'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { default as MuiLink } from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const Footer = () => {
  const theme = useTheme()
  const pathname = usePathname()
  const isWhite = pathname === '/' || pathname === '/services'

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        flex: 1,
        bgcolor: isWhite ? theme.palette.background.default : theme.palette.tertiary.dark,
      }}
    >
      <Container id="footer" maxWidth="md">
        <Stack>
          <Box component="img" src="/logo.png" alt="" width={220} sx={{ mx: 'auto', mt: -6 }} />
          <Stack
            direction="row"
            spacing={2}
            divider={<span>|</span>}
            justifyContent="center"
            sx={{ my: 3 }}
          >
            <MuiLink
              component={Link}
              href="/privacy"
              sx={{ color: 'textSecondary', '&:hover': { color: theme.palette.primary.main } }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              href="/accessibility"
              sx={{ color: 'textSecondary', '&:hover': { color: theme.palette.primary.main } }}
            >
              Accessibility Statement
            </MuiLink>
          </Stack>
          <Typography color="textSecondary" sx={{ textAlign: 'center' }}>
            &copy; 2025 Brief Consulting. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
