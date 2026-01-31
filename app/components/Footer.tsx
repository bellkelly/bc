'use client'

import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { default as MuiLink } from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box component="footer" sx={{ py: 8 }}>
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
              href="/privacy"
              color="textSecondary"
              sx={{ '&:hover': { color: theme.palette.primary.main } }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href="/accessibility"
              color="textSecondary"
              sx={{ '&:hover': { color: theme.palette.primary.main } }}
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
