'use client'
import React from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Gradient from '@/app/components/Gradient'

const resources = [
  {
    type: 'Guide',
    title: 'Designing Practical, Outcome-Driven Strategic Plans',
    description: [
      'Renewing, refreshing, or sometimes creating brand new strategic plans every few years is a very resource-intensive exercise. Considering the expense of hiring a consultant to lead this work, if you are interested in developing a pragmatic, outcome-driven strategic plan in-house, this guide can help. This document provides a clear, basic, step-by-step process:',
    ],
    steps: [
      'Project Planning',
      'Environmental Scan',
      'Engagement',
      'Strategic Goal Development',
      'Measure Design',
    ],
    closing: [
      'You can "right-size" each step, based on what your organization has the capacity to do.',
      'Throughout, I offer suggestions on how to use artificial intelligence (AI) and large language models (LLMs), like ChatGPT, Claude, Copilot, Gemini, etc., to help the process, while avoiding the pitfalls.',
    ],
    href: '/resources/Designing%20Practical%2C%20Outcome-Driven%20Strategic%C2%A0Plans%20v1.pdf',
  },
  {
    type: 'Guide',
    title: 'Systematizing Organizational Analysis and Decision-Making with Briefing Notes',
    description: [
      'A strong, clear, outcome-driven strategic plan, with a matching operational plan, is fundamental to an organization’s success. But even with strong plans in place, effective execution and navigation of emerging opportunities and risks require consistently excellent decision-making.',
      'Excellent decision-making is systematic, driven by analysis that properly captures the relevant perspectives and considerations, and facilitated by clear communication. Of course, this is easier said than done! And there isn’t just one ‘right way’ to do it. But a helpful tool in trying to foster excellent decision-making is the memo or "briefing note".',
      'This resource offers guidance on how to write high-quality briefing notes to support effective decision-making at your organization. The guidance is delivered through three steps:',
    ],
    steps: [
      "How to scope the briefing note's parameters",
      'How to structure and write your briefing note',
      'How to appropriately use AI to improve and speed up your work',
    ],
    href: '/resources/Systematizing%20Organizational%20Analysis%20and%20Decision-Making%20with%20Briefing%20Notes%C2%A0%20v1.pdf',
  },
]

export default function ResourcesPage() {
  const theme = useTheme()

  return (
    <>
      <Gradient id="resources" sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="md">
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} sx={{ color: 'common.white' }}>
              <Typography
                variant="overline"
                component="h1"
                sx={{ color: theme.palette.tertiary.main }}
              >
                Resources
              </Typography>
              <Typography component="p" variant="h3" sx={{ mb: 3 }}>
                Free guides to build your capacity
              </Typography>
              <Typography sx={{ color: theme.palette.tertiary.main }}>
                Even if we don&#39;t have the opportunity to work together, these resources are here
                to help.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Gradient>

      <Box sx={{ py: { xs: 4, md: 7 }, bgcolor: theme.palette.tertiary.dark }}>
        <Container maxWidth="md">
          <Stack spacing={{ xs: 3, md: 4 }}>
            {resources.map((resource) => (
              <Card
                key={resource.title}
                sx={{
                  bgcolor: 'common.white',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                  <Typography variant="overline" component="h2" color="primary">
                    {resource.type}
                  </Typography>

                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                    }}
                  >
                    {resource.title}
                  </Typography>

                  {resource.description.map((paragraph) => (
                    <Typography key={paragraph} color="text.secondary" sx={{ mb: 2 }}>
                      {paragraph}
                    </Typography>
                  ))}

                  <Stack component="ol" spacing={2} sx={{ listStyle: 'none', my: 3 }}>
                    {resource.steps.map((step, index) => (
                      <Stack
                        key={step}
                        component="li"
                        direction="row"
                        spacing={2}
                        alignItems="center"
                      >
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            p: 1.5,
                            height: 12,
                            width: 12,
                            ...theme.typography.body1,
                          }}
                          alt={`step ${index + 1}`}
                        >
                          {index + 1}
                        </Avatar>
                        <Typography sx={{ fontWeight: 400 }}>{step}</Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {resource.closing?.map((paragraph) => (
                    <Typography key={paragraph} color="text.secondary" sx={{ mb: 2 }}>
                      {paragraph}
                    </Typography>
                  ))}

                  <Divider sx={{ mb: 2.5 }} />

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    alignItems={{ xs: 'stretch', sm: 'center' }}
                    justifyContent="space-between"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Free PDF resource
                    </Typography>

                    <Button
                      variant="contained"
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="medium"
                    >
                      Download the guide
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  )
}
