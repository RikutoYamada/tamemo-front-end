import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NextPageContext } from 'next'
import { useState } from 'react'

import { Button } from '@/components/elements/Button'
import { TextField } from '@/components/elements/TextField/TextField'
import { useRegister } from '@/features/auth/hooks/useRegister'
import { NewUser } from '@/features/auth/types'
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
  const currentUserId = cookies.get(ctx).current_user_id
  if (currentUserId) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    }
  }

  return {
    props: {},
  }
}

const Register = () => {
  const { isLoading, mutate } = useRegister()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const newUser: NewUser = {
    name,
    email,
    password,
    passwordConfirmation,
  }

  return (
    <Container sx={{ paddingY: '40px' }}>
      <Box sx={boxStyles}>
        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25 }} gutterBottom>
          会員登録
        </Typography>

        <TextField
          id='name'
          label='お名前'
          onChange={(e) => setName(e.target.value)}
          type='text'
          sx={{ width: '100%' }}
        />
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
        <TextField
          id='password-confirmation'
          label='パスワード（確認用）'
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type='password'
          sx={{ width: '100%' }}
        />
        <Button
          variant='contained'
          isLoading={isLoading}
          onClick={() => {
            mutate(newUser)
          }}
          sx={{ width: '100%', height: '56px' }}
        >
          会員登録
        </Button>
      </Box>
    </Container>
  )
}

export default Register
