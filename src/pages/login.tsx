import { Button } from '@/components/elements/Button'
import { Card } from '@/components/elements/Card'
import { TextField } from '@/components/elements/TextField/TextField'
import { useState } from 'react'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { LoginCredentials } from '@/features/auth/api/login'
import cookies from "@/utils/cookies"
import { NextPageContext } from 'next'

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  if (currentUserId) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: { currentUserId: currentUserId || null }
  };
}

type loginPageProps = {
  currentUserId: string
}
const login = (props: loginPageProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const params: LoginCredentials = {
    email,
    password
  }

  const { data, error, isLoading, mutate } = useLogin()

  return (
    <div className='flex justify-center mt-36'>
      <Card>
        <div className='flex justify-center'>
          <h1 className='font-bold'>ログイン</h1>
        </div>
        <TextField
          className='mb-4'
          type='email'
          placeholder='example@email.com'
          onChange={e => setEmail(e.target.value)}
          label='メール' />
        <TextField
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
          label='パスワード' />
        <div className='flex justify-end mt-10'>
          <Button type='submit' onClick={() => { mutate(params) }} isLoading={isLoading}>ログイン</Button>
        </div>
      </Card>
    </div>
  )
}

export default login