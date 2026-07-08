'use client'

import React from 'react'
import Link from 'next/link'

import Gradient from '@/app/components/Gradient'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const NEXT_PUBLIC_FULL_NAME = process.env.NEXT_PUBLIC_FULL_NAME || 'Your Name'

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <Gradient id="hero" sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} sx={{ color: 'tertiary.light' }}>
              <Typography variant="h3" component="h1" sx={{ mb: 2, color: 'common.white' }}>
                Brief Consulting
              </Typography>
              <Typography
                component="p"
                variant="h6"
                color="textSecondary"
                sx={{ mb: 5, color: 'inherit', lineHeight: 1.6, fontStyle: 'italic' }}
              >
                Strategic analysis, advising, and solutions—for mission-driven, people-serving
                organizations
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="/contact"
                component={Link}
                sx={{ color: theme.palette.primary.main, bgcolor: theme.palette.common.white }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Gradient>
      <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Stack
            sx={{ flexBasis: '10%', alignItems: 'flex-end', display: { xs: 'none', md: 'flex' } }}
          >
            <Divider
              orientation="vertical"
              sx={{ bgcolor: theme.palette.primary.main, width: 8 }}
            />
          </Stack>
          <Stack sx={{ flexBasis: { xs: '100%', md: '90%' } }}>
            <Typography
              color="primary"
              component="h2"
              sx={{ textTransform: 'uppercase', fontWeight: 600 }}
            >
              About
            </Typography>
            <Typography variant="h4" component="p" sx={{ mb: 4 }}>
              {`${NEXT_PUBLIC_FULL_NAME}, Principal Consultant`}
            </Typography>
            <Typography variant="h6" component="p" sx={{ mb: 2 }}>
              I have 15 years of experience in not-for-profit organizations, serving as a subject
              matter expert and leader in a range of business areas, including public policy and
              advocacy, program design and implementation, and organizational strategy, planning,
              and analysis.
            </Typography>
            <Typography variant="h6" component="p" sx={{ mb: 2 }}>
              This diversified experience makes me uniquely equipped to quickly understand various
              operating contexts, cross-functional perspectives, and challenges—and offer pragmatic,
              tailored solutions.
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box
        id="call-to-action"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(160deg, #3c1865 0%, ${theme.palette.primary.main} 100%)`,
          padding: '72px 64px',
          py: 7,
          px: 6,
          color: theme.palette.common.white,
          textAlign: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6" component="p" sx={{ mb: 3, fontStyle: 'italic' }}>
          Learn more about working together.
        </Typography>
        <Button
          variant="contained"
          href="/services"
          component={Link}
          sx={{ color: theme.palette.primary.main, bgcolor: theme.palette.common.white }}
        >
          Services
        </Button>
      </Box>
    </>
  )
}
