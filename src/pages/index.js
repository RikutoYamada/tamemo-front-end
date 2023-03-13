import Link from 'next/link'

import { Button } from '@/components/elements/Button'
import Card from '@/components/elements/Card/Card'

const Home = () => {
  return (
    <div className='flex justify-center mt-36'>
      <Card>
        <div className='flex justify-center'>
          <h1>ログインしていません</h1>
        </div>
        <div className='flex justify-end mt-10'>
          <Link href='/signin' passHref>
            <Button>ログイン</Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Home