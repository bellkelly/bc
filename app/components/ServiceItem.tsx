'use client'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export interface Service {
  index: number
  title: string
  content: string
}

const ServiceItem = ({ index, title, content }: Service) => (
  <Card elevation={1}>
    <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: 3, p: 3 }}>
      <Typography color="primary" variant="h4" component="span">
        {index}
      </Typography>
      <Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography color="textSecondary">{content}</Typography>
      </Box>
    </CardContent>
  </Card>
)

export default ServiceItem
