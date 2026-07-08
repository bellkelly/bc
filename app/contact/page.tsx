'use client'
import React from 'react'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/system'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Gradient from '@/app/components/Gradient'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN

export default function ResourcesPage() {
  const theme = useTheme()

  return (
    <Gradient id="contact" sx={{ flexGrow: 1, py: { xs: 6, md: 12 } }}>
      <Container maxWidth="md">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ color: 'common.white' }}>
          <Stack sx={{ flexBasis: '50%', justifyContent: 'center' }}>
            <Typography
              variant="overline"
              component="h1"
              sx={{ color: theme.palette.tertiary.main, mb: 1 }}
            >
              Contact
            </Typography>
            <Typography component="p" variant="h3">
              Get in touch
            </Typography>
          </Stack>
          <Stack sx={{ flexBasis: '50%' }}>
            <Typography variant="body2" color="common.white" sx={{ mb: 3 }}>
              If you’re interested in connecting, you can reach me by email or LinkedIn:
            </Typography>
            <Divider flexItem sx={{ my: 2, borderColor: alpha(theme.palette.common.white, 0.5) }} />
            <Typography
              variant="overline"
              component="h1"
              sx={{ color: theme.palette.tertiary.main }}
            >
              Email
            </Typography>
            <Link
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener norefferer"
              sx={{ color: 'inherit' }}
            >
              {EMAIL}
            </Link>
            <Divider flexItem sx={{ my: 2, borderColor: alpha(theme.palette.common.white, 0.5) }} />
            <Typography
              variant="overline"
              component="h1"
              sx={{ color: theme.palette.tertiary.main }}
            >
              LinkedIn
            </Typography>
            <Link
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noopener norefferer"
              sx={{ color: 'inherit' }}
            >
              {LINKEDIN}
            </Link>
            <Divider flexItem sx={{ my: 2, borderColor: alpha(theme.palette.common.white, 0.5) }} />
          </Stack>
        </Stack>
      </Container>
    </Gradient>
  )
}
