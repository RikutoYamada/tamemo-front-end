import Link from 'next/link'

import { Button } from '@/components/elements/Button'
import Card from '@/components/elements/Card/Card'
import { useSyncExternalStore } from 'react'

const subscribe = (callback) => {
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener('storage', callback)
  }
} 
const Home = () => {
  const snapShot = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem('isAuthenticated'),
    () => ''
  )
  
  console.log(snapShot)
  return (
    <div className='flex justify-center mt-36'>
      <Card>
        <div className='flex justify-center'>
          <h1>ログインしていません</h1>
        </div>
        <div className='flex justify-end mt-10'>
          <Link href='/signin' passHref>
            <Button>ログイン</Button>
            {snapShot && <h1>ログインしています</h1>}
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default Home