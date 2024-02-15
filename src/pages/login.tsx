import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NextPageContext } from 'next'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/elements/Button'
import { RHFTextField } from '@/components/elements/TextField/RHFTextField'
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

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginY: '100px',
  padding: '25px',
  width: '30%',
}
const boxStyles = { display: 'flex', margin: 'auto', paddingBottom: '20px' }
const typographyStyles = { color: '#26a69a', fontWeight: 'bold', textAlign: 'center' }
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '200px',
  justifyContent: 'space-between',
}

const Login = () => {
  const { control, handleSubmit } = useForm<LoginCredentials>()
  const { isLoading, mutate } = useLogin()
  const onSubmit: SubmitHandler<LoginCredentials> = (data) => mutate(data)

  return (
    <Container>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <Image
            alt='tamemo_logo'
            src='tamemo-primary.svg'
            style={{ marginRight: '10px' }}
            width={35}
            height={35}
          />
          <Typography variant='h5' component='h5' sx={typographyStyles}>
            tamemo
          </Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={formStyles}>
          <RHFTextField
            name='email'
            control={control}
            id='email'
            label='メール'
            type='email'
            sx={{ width: '100%' }}
          />
          <RHFTextField
            name='password'
            control={control}
            id='password'
            label='パスワード'
            type='password'
            sx={{ width: '100%' }}
          />
          <Button
            type='submit'
            variant='contained'
            isLoading={isLoading}
            sx={{ width: '100%', height: '56px' }}
          >
            ログイン
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Login
