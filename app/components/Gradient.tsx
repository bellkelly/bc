import React, { FC } from 'react'

import { alpha } from '@mui/system'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { SxProps } from '@mui/system'

interface GradientProps {
  id: string
  children?: React.ReactNode
  sx?: SxProps
}

const Gradient: FC<GradientProps> = (props) => {
  const theme = useTheme()

  const { id, children, sx = {} } = props

  return (
    <Box
      id={id}
      sx={{
        background: theme.palette.customGradient.main,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity: 0.5,
          backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.common.white, 0.4)} 1px, transparent 1.4px)`,
          backgroundSize: '26px 26px',
          maskImage:
            'radial-gradient(circle at 70% 30%, var(--mui-palette-common-black) 0%, transparent 65%)',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          pointerEvents: 'none',
          top: -100,
          right: -100,
          width: 480,
          height: 480,
          background: `radial-gradient(circle, ${alpha(theme.palette.common.white, 0.16)}, transparent 70%)`,
          borderRadius: '50%',
        }}
      />
      {children}
    </Box>
  )
}

export default Gradient
