import { useState } from 'react'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const navigationLinks = [
  { name: 'ホーム', url: '/' },
  { name: '履歴', url: '/history' }
]

export const NavigationMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id='menu-button'
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        aria-controls={open ? 'menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {navigationLinks.map((navigationLink) => (
          <Link href={`${navigationLink.url}`} key={navigationLink.name} style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose} sx={{ color: 'black' }}>
              {navigationLink.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}