import { Button } from '@/components/elements/Button'
import Card from '@/components/elements/Card/Card'
import { TextField } from '@/components/elements/TextField/TextField'
import { useState } from 'react'
import { axios } from '@/lib/axios'

export type SignInParams = {
  email: string
  password: string
}

const signIn = (params: SignInParams) => {
  return axios.post('/sign_in', params)
}
const SignIn = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const params: SignInParams = {
      email,
      password
    }
    console.log(email)
    try {
      const res = await signIn(params)
      console.log(res)

      if (res.status === 201) {
        console.log('signed in')

      } else {
        console.log('status failed')
      }
    } catch (error) {
      console.log('failed')
    }
  }
  return (
    <div className='flex justify-center mt-36'>
      <Card>
        <div className='flex justify-center'>
          <h1 className='font-bold'>ログイン</h1>
        </div>
        <TextField
          className='mb-4'
          type={'email'}
          placeholder={'example@email.com'}
          onChange={e => setEmail(e.target.value)}
          label={'メール'} />
        <TextField 
          type={'password'}
          placeholder={'password'}
          onChange={e => setPassword(e.target.value)}
          label={'パスワード'} />
        <div className='flex justify-end mt-10'>
          <Button type='submit' onClick={handleSubmit}>ログイン</Button>
        </div>
      </Card>
    </div>
  )
}

export default SignIn