'use client'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'

import { map } from 'lodash'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useMediaQuery } from '@mui/system'
import { default as MUIAppBar } from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import { default as MuiDrawer } from '@mui/material/Drawer'
import { default as MuiLink } from '@mui/material/Link'

const drawerWidth = 240
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
]

const Drawer = ({ onToggle, open }: { onToggle: () => void; open: boolean }) => {
  const theme = useTheme()
  const pathname = usePathname()

  return (
    <MuiDrawer
      open={open}
      onClose={onToggle}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'common.white',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {map([...navItems, { label: 'Contact', href: '/contact' }], ({ label, href }) => {
            const selected = pathname === href

            return (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  href={href}
                  component={Link}
                  onClick={onToggle}
                  selected={selected}
                  scroll
                  sx={{
                    '&:hover': {
                      bgcolor: selected ? 'primary.main' : 'primary.light',
                      color: selected
                        ? theme.palette.getContrastText(theme.palette.primary.main)
                        : theme.palette.getContrastText(theme.palette.primary.light),
                    },

                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: theme.palette.getContrastText(theme.palette.primary.main),
                    },

                    '&.Mui-selected:hover': {
                      bgcolor: 'primary.main',
                      color: theme.palette.getContrastText(theme.palette.primary.main),
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </MuiDrawer>
  )
}
const AppBar = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [mobileOpen, setMobileOpen] = useState(!onMobile)

  useEffect(() => {
    if (!onMobile) {
      setMobileOpen(false)
    }
  }, [onMobile])

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <MUIAppBar
        component="nav"
        position="fixed"
        sx={{
          bgcolor: 'common.white',
          color: 'primary.main',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ maxWidth: theme.breakpoints.values.lg, mx: 'auto', width: '100%' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <MuiLink component={Link} href="/" scroll sx={{ mx: 2 }}>
            <Box component="img" src="/logo.svg" alt="Brief Consulting" height={56} width={85} />
          </MuiLink>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 3, alignItems: 'center' }}>
            {!onMobile &&
              map(navItems, (item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  scroll
                  sx={{ my: 2, color: 'primary', display: { xs: 'none', sm: 'block' } }}
                >
                  {item.label}
                </Button>
              ))}
            <Button variant="contained" component={Link} scroll href="/contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </MUIAppBar>
      <Drawer onToggle={handleDrawerToggle} open={mobileOpen} />
      {children}
    </Box>
  )
}

export default AppBar
