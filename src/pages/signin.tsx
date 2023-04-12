import { Button } from '@/components/elements/Button'
import Card from '@/components/elements/Card/Card'
import { TextField } from '@/components/elements/TextField/TextField'
import { useState } from 'react'
import { useLogin } from '@/features/auth/hooks/useLogin'
import { LoginCredentials } from '@/features/auth/api/login'
import { parseCookies, setCookie} from 'nookies'
import { GetServerSideProps } from "next";
import nookies from 'nookies'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context)
  return {
    props: { layout: cookies.user_id ? true : false}
  };
}
const SignIn = (props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const params: LoginCredentials = {
    email,
    password
  }

  const { data, error, isLoading, mutate } = useLogin()

  const cookies = parseCookies()
  // console.log(cookies)


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

export default SignIn