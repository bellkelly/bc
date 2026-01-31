'use client'

import { ReactElement } from 'react'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ServiceItem = ({ icon, text }: { icon: ReactElement; text: string }) => (
  <Stack direction="row" spacing={2} sx={{ p: 2 }}>
    <Avatar sx={{ bgcolor: 'primary.main', color: 'tertiary.light', width: 56, height: 56 }}>
      {icon}
    </Avatar>
    <Typography variant="h6" component="p">
      {text}
    </Typography>
  </Stack>
)

export default ServiceItem
