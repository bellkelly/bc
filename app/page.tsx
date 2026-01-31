'use client'

import React from 'react'

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import EmailIcon from '@mui/icons-material/Email'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import ServiceList from '@/app/components/ServiceList'

const EMAIL = process.env.NEXT_PUBLIC_EMAIL
const LINKEDIN = process.env.NEXT_PUBLIC_LINKEDIN

const services = {
  core: [
    {
      text: 'Public policy, organizational policy, legislation, research analysis',
      icon: <GavelOutlinedIcon />,
    },
    {
      text: 'Briefing note, presentation, report, policy, position statement, and funding proposal development',
      icon: <DescriptionOutlinedIcon />,
    },
    {
      text: 'Reporting template and tool design',
      icon: <DashboardCustomizeOutlinedIcon />,
    },
  ],
  inDepth: [
    {
      text: 'Business, operational, and strategic planning',
      icon: <AccountTreeOutlinedIcon />,
    },
    {
      text: 'Project and program planning and management',
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      text: 'Risk management and performance measurement support',
      icon: <AssessmentOutlinedIcon />,
    },
  ],
}

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <Box
        id="hero"
        sx={{
          background: theme.palette.customGradient.main,
          display: 'flex',
          alignItems: 'center',
          py: { xs: 8, md: 16 },
        }}
      >
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} sx={{ color: 'tertiary.light' }}>
              <Typography variant="h3" component="h1" sx={{ mb: 4, color: 'common.white' }}>
                Brief Consulting
              </Typography>
              <Typography
                component="p"
                variant="h6"
                color="textSecondary"
                sx={{ mb: 5, color: 'inherit', lineHeight: 1.6 }}
              >
                Strategic analysis, advising, and solutions—for mission-driven, people-serving
                organizations
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="/#contact"
                sx={{ color: theme.palette.primary.main, bgcolor: theme.palette.common.white }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Card
            elevation={0}
            sx={{
              boxShadow: { xs: 'none', md: theme.shadows[4] },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, md: 6 },
                bgcolor: { xs: theme.palette.background.default, md: 'tertiary.main' },
              }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                About Chris Langlois, Principal Consultant
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 2 }}>
                Chris brings 15 years of experience in not-for-profit organizations, serving as a
                subject matter expert and leader in a range of functional areas, including public
                policy and advocacy, program design and implementation, and organizational planning
                and strategy.
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 2 }}>
                This diversified experience makes him uniquely equipped to quickly understand
                various operating contexts, cross-functional perspectives, and challenges—and offer
                pragmatic, tailored solutions.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Box
        id="services"
        sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 30, md: 40 }, bgcolor: theme.palette.tertiary.dark }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" sx={{ mb: 10, textAlign: 'center' }}>
            Services
          </Typography>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ServiceList services={services.core} title="Core Services" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ServiceList services={services.inDepth} title="In-Depth Services" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        id="contact"
        sx={{
          marginTop: -18,
          mb: 12,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Card
            elevation={10}
            sx={{
              mx: 'auto',
              py: { xs: 3, md: 4 },
              px: { xs: 3, md: 2 }, // More padding on mobile
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                Contact
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 3 }}>
                Reach out via email or LinkedIn to learn more.
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                sx={{
                  mb: 2,
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.85 },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.common.white}`,
                    outlineOffset: '4px',
                    borderRadius: '4px',
                  },
                }}
                component="a"
                href={`mailto:${EMAIL}`}
                aria-label={`Email ${EMAIL}`}
              >
                <EmailIcon />
                <Typography variant="h6" component="p">
                  {EMAIL}
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                  '&:hover': { opacity: 0.85 },
                  '&:focus-visible': {
                    outline: `2px solid ${theme.palette.common.white}`,
                    outlineOffset: '4px',
                    borderRadius: '4px',
                  },
                }}
                component="a"
                href={`https://${LINKEDIN}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile ${LINKEDIN}`}
              >
                <LinkedInIcon />
                <Typography variant="h6" component="p">
                  {LINKEDIN}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  )
}
