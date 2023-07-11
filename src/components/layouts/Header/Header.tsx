import Link from 'next/link'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { useLogout } from '@/features/auth/hooks/useLogout'
import { Button } from '@/components/elements/Button'
import { NavigationMenu } from '@/components/elements/NavigationMenu'


export type HeaderProps = {
  currentUserId: string | null
}

export const Header = ({
  currentUserId
}: HeaderProps
) => {
  const { mutate } = useLogout()
  
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <NavigationMenu />
          <Link href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image alt='tamemo_top_page' src='tamemo.svg' style={{ marginRight: '10px' }} width={35} height={35} />
            <Typography variant='h5' component='h5' sx={{ color: 'white', fontWeight: 'bold' }}>
              tamemo
            </Typography>
          </Link>
        </Box>
        {currentUserId ?
          <Button onClick={() => mutate()}>ログアウト</Button>
          :
          <Box>
            <Link href='/login'>
              <Button>ログイン</Button>
            </Link>
            <Link href='/register'>
              <Button>会員登録</Button>
            </Link>
          </Box>
        }
      </Toolbar>
    </AppBar>
  )
}