import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NextPageContext } from 'next'
import { useState } from 'react'

import { Button } from '@/components/elements/Button'
import { TextField } from '@/components/elements/TextField'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { LoginCredentials } from '@/features/auth/types'
import cookies from '@/utils/cookies'

const boxStyles = {
  width: '600px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
}

export function getServerSideProps(ctx: NextPageContext) {
  const authToken = cookies.get(ctx).token
  if (authToken) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    props: { isLoginPage: true},
  }
}

const Login = () => {
  const { isLoading, mutate } = useLogin()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const loginCredentials: LoginCredentials = {
    email,
    password,
  }

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Box sx={boxStyles}>
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25 }} gutterBottom>
          ログイン
        </Typography>

        <TextField
          id='email'
          label='メール'
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          sx={{ width: '100%' }}
        />
        <TextField
          id='password'
          label='パスワード'
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          sx={{ width: '100%' }}
        />
        <Button
          type='submit'
          variant='contained'
          isLoading={isLoading}
          onClick={() => {
            mutate(loginCredentials)
          }}
          sx={{ width: '100%', height: '56px' }}
        >
          ログイン
        </Button>
      </Box>
    </Container>
  )
}

export default Login
