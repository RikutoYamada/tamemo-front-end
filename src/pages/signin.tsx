import Link from 'next/link'

import { Button } from '@/components/elements/Button'
import Card from '@/components/elements/Card/Card'
import TextField from '@/components/elements/TextField/TextField'

const SignIn = () => {
  return (
    <div className='flex justify-center mt-36'>
      <Card>
        <div className='flex justify-center'>
          <h1 className='font-bold'>ログイン</h1>
        </div>
        <TextField label='メール' placeholder='example@mail.com' className='mb-6'/>
        <TextField label='パスワード' placeholder='password' type='password'/>
        <div className='flex justify-end mt-10'>
          <Link href='/signin' passHref>
            <Button>ログイン</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default SignIn