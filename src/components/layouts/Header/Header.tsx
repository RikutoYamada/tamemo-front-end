import { useLogout } from '@/features/auth/hooks/useLogout'
import Link from 'next/link'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { Tab, Tabs } from '@mui/material'

export type HeaderProps = {
  currentUserId: string | null
}

export const Header = ({
  currentUserId
}: HeaderProps
) => {

  const { mutate } = useLogout()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Link href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Image alt='tamemo_top_page' src='tamemo.svg' style={{ marginRight: '10px' }} width={35} height={35} />
              <Typography variant='h5' component='h5' sx={{ color: 'white', fontWeight: 'bold' }}>
                tamemo
              </Typography>
            </Link>
          </Box>
          {currentUserId &&
            <Button color="inherit" sx={{ color: 'white' }} onClick={() => mutate()}>ログアウト</Button>
          }
          {!currentUserId &&
            <div>
              <Link href='/login'>
                <Button color="inherit" sx={{ color: 'white' }}>ログイン</Button>
              </Link>
              <Link href='/register'>
                <Button color="inherit" sx={{ color: 'white' }}>新規登録</Button>
              </Link>
            </div>
          }
        </Toolbar>
        <Tabs>
          <Tab label="Page 1" component={Link} href="/page1" />
          <Tab label="Page 2" component={Link} href="/page2" />
          <Tab label="Page 3" component={Link} href="/page3" />
        </Tabs>
      </AppBar>
    </Box>
  )
}

