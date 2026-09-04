'use client'
import React from 'react'
import Link from 'next/link'

import { map } from 'lodash'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import Gradient from '@/app/components/Gradient'
import ServiceItem from '@/app/components/ServiceItem'

const services = [
  {
    title: 'Policy and Governance Sprints',
    content: (
      <>
        {
          'I provide rapid-turnaround support to help lean leadership teams address policy and governance needs, including:\n'
        }
        <Box
          component="ol"
          sx={{
            listStyle: 'none',
            counterReset: 'item',
            marginLeft: '-16px',
            marginTop: '8px',
            '& li': {
              counterIncrement: 'item',
              display: 'list-item',
              '&::before': {
                content: '"(" counter(item, lower-latin) ") "',
              },
            },
          }}
        >
          <ListItem>
            Governance Modernization: Developing board manuals, committee terms of reference,
            governance policies, and bylaws.
          </ListItem>
          <ListItem>
            Policy and Advocacy Submissions: Drafting clear, evidence-based policy position papers,
            briefs, and government submissions.
          </ListItem>
          <ListItem>
            Operational Policies: Designing clear, modern, and compliant administrative policies and
            procedures.
          </ListItem>
        </Box>
      </>
    ),
  },
  {
    title: 'Analysis',
    content:
      "I support teams in conducting analysis — including collecting and synthesising sector data, emerging trends, and stakeholder input — to determine if and how to address emergent business opportunities and risks, within the context of the organization's strategic plan.",
  },
  {
    title: 'Planning',
    content:
      'I work with organizations to design and build strategic plans, operational plans, and initiative-specific plans — either through directly leading these activities or guiding them.',
  },
  {
    title: 'Public Policy Advising',
    content:
      'As a career-long policy professional, I advise organizations on how to approach public policy issues and establish thoughtful positions and advocacy strategies in relation to those issues.',
  },
]
export default function ServicesPage() {
  const theme = useTheme()

  return (
    <>
      <Gradient id="services" sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} sx={{ color: 'common.white' }}>
              <Typography
                variant="overline"
                component="h1"
                sx={{ color: theme.palette.tertiary.main }}
              >
                Services
              </Typography>
              <Typography component="p" variant="h3" sx={{ mb: 3 }}>
                Planning, analysis, and advising tailored to your needs
              </Typography>
              <Typography sx={{ color: theme.palette.tertiary.main }}>
                Practical strategy, business, and operational support for not-for-profit
                organizations who can&#39;t afford to drift.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Gradient>

      <Box sx={{ py: { xs: 3, md: 5 }, bgcolor: theme.palette.tertiary.dark }}>
        <Container maxWidth="md">
          <Typography variant="h6" component="p" sx={{ mb: 2 }}>
            Not-for-profit organizations play a critical role across our country—leading research
            and advocacy work to inform or guide public policy; executing public education
            activities and awareness campaigns; and delivering programs and services that support
            our communities.
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 2 }}>
            Of course, undertaking this work in a focused, outcome-driven way requires thoughtful
            attention to strategic, business, and operational planning, supported by ongoing
            evidence-informed analysis and decision-making.
          </Typography>
          <Typography variant="h6" component="p" sx={{ mb: 2 }}>
            In a zero-sum context, planning and analysis can sometimes feel dispensable. But not
            engaging in robust planning and deliberate analysis leads to scope creep, mission drift,
            and general inefficiency.
          </Typography>
          <Typography variant="h6" component="p">
            I help not-for-profit organizations make these challenges more manageable.
          </Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, py: 5, px: { xs: 1, sm: 5 } }}
          >
            <Typography variant="h5" component="p" sx={{ textAlign: 'center', fontWeight: 600 }}>
              How I help
            </Typography>
            {map(services, (service, index) => {
              return (
                <ServiceItem
                  key={service.title}
                  index={index + 1}
                  title={service.title}
                  content={service.content}
                />
              )
            })}
          </Box>
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
          Get started with these capacity-building tools.
        </Typography>
        <Button
          variant="contained"
          href="/resources"
          component={Link}
          sx={{ color: theme.palette.primary.main, bgcolor: theme.palette.common.white }}
        >
          Resources
        </Button>
      </Box>
    </>
  )
}
