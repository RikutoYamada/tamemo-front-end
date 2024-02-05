import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NextPageContext } from 'next'
import Image from 'next/image'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import { Button } from '@/components/elements/Button'
import { TextField } from '@/components/elements/TextField'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { LoginCredentials } from '@/features/auth/types'
import cookies from '@/utils/cookies'

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
    props: { isLoginPage: true },
  }
}

const Login = () => {
  const { control, handleSubmit } = useForm<LoginCredentials>()
  const { isLoading, mutate } = useLogin()
  const onSubmit: SubmitHandler<LoginCredentials> = (data) => mutate(data)

  return (
    <Container>
      <Card
        sx={{
          width: '30%',
          margin: 'auto',
          marginY: '100px',
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ paddingBottom: '20px', margin: 'auto', display: 'flex' }}>
          <Image
            alt='tamemo_logo'
            src='tamemo-primary.svg'
            style={{ marginRight: '10px' }}
            width={35}
            height={35}
          />
          <Typography
            variant='h5'
            component='h5'
            sx={{ textAlign: 'center', color: '#26a69a', fontWeight: 'bold' }}
          >
            tamemo
          </Typography>
        </Box>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '200px',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange } }) => (
              <TextField
                onChange={onChange}
                id='email'
                label='メール'
                type='email'
                sx={{ width: '100%' }}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field: { onChange } }) => (
              <TextField
                onChange={onChange}
                id='password'
                label='パスワード'
                type='password'
                sx={{ width: '100%' }}
              />
            )}
          />
          <Button
            type='submit'
            variant='contained'
            isLoading={isLoading}
            sx={{ width: '100%', height: '56px' }}
          >
            ログイン
          </Button>
        </form>
      </Card>
    </Container>
  )
}

export default Login
