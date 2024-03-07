import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { NextPageContext } from 'next'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from '@/components/elements/Button'
import { RHFTextField } from '@/components/elements/TextField/RHFTextField'
import { useRegister } from '@/features/auth/hooks/useRegister'
import { NewUser } from '@/features/auth/types'
import cookies from '@/utils/cookies'
import { registerValidationSchema } from '@/utils/validationSchema'

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
  height: '293px',
  justifyContent: 'space-between',
}

const Register = () => {
  const { control, handleSubmit } = useForm<NewUser>({
    mode: 'onChange',
    resolver: zodResolver(registerValidationSchema),
  })
  const { isLoading, mutate } = useRegister()
  const onSubmit: SubmitHandler<NewUser> = (data) => mutate(data)

  return (
    <Container>
      <Card sx={cardStyles}>
        <Box sx={boxStyles}>
          <Image
            alt='tamemo_logo'
            height={35}
            src='tamemo-primary.svg'
            style={{ marginRight: '10px' }}
            width={35}
          />
          <Typography component='h5' sx={typographyStyles} variant='h5'>
            tamemo
          </Typography>
        </Box>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={formStyles}>
          <RHFTextField
            control={control}
            id='name'
            label='ユーザー名'
            name='name'
            sx={{ width: '100%' }}
            type='text'
          />
          <RHFTextField
            control={control}
            id='email'
            label='メール'
            name='email'
            sx={{ width: '100%' }}
            type='email'
          />
          <RHFTextField
            control={control}
            id='password'
            label='パスワード'
            name='password'
            sx={{ width: '100%' }}
            type='password'
          />
          <Button
            isLoading={isLoading}
            sx={{ width: '100%', height: '56px' }}
            type='submit'
            variant='contained'
          >
            会員登録
          </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Register
