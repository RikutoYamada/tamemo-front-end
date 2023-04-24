import { Button } from '@/components/elements/Button'
import { Card } from '@/components/elements/Card'
import { TextField } from '@/components/elements/TextField/TextField'
import { useState } from 'react'
import { useRegister } from '@/features/auth/hooks/useRegister'
import { RegisterCredentials } from '@/features/auth/api/register'
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
const register = (props: loginPageProps) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')

  const params: RegisterCredentials = {
    name,
    email,
    password,
    passwordConfirmation
  }

  const { data, error, isLoading, mutate } = useRegister()

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
          onChange={e => setName(e.target.value)}
          label='お名前' />
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
        <TextField
          type='password'
          placeholder='password'
          onChange={e => setPasswordConfirmation(e.target.value)}
          label='パスワード（確認用）' />
        <div className='flex justify-end mt-10'>
          <Button type='submit' onClick={() => { mutate(params) }} isLoading={isLoading}>新規登録</Button>
        </div>
      </Card>
    </div>
  )
}

export default register