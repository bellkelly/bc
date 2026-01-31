'use client'

import React from 'react'

import map from 'lodash/map'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import ServiceItem from '@/app/components/ServiceItem'

export interface Service {
  icon: React.ReactElement
  text: string
}

interface ServiceListProps {
  services: Service[]
  title: string
}

const ServiceList = ({ services, title }: ServiceListProps) => {
  const theme = useTheme()
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title={title}
        sx={{
          textAlign: 'center',
          color: 'common.white',
          background: theme.palette.customGradient.main,
          py: 5,
        }}
      />
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={3}>
          {map(services, (service) => (
            <ServiceItem key={service.text} icon={service.icon} text={service.text} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ServiceList
