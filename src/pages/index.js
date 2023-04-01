import Card from '@/components/elements/Card/Card'
import { useSyncExternalStore } from 'react'
import { axios } from "@/lib/axios";
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'


const subscribe = (callback) => {
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener('storage', callback)
  }
}

const fetchUsers = async () => {
  const res = await axios.get('/users')
  return res
}
const Home = () => {
  const router = useRouter()
  const { isLoading, isError, data } = useQuery(['repoData'],
    () => axios.get('/users'), {
    retry: 0,
    onError: () => {
      router.push('/signin')
    }
  })
  const snapShot = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem('isAuthenticated'),
    () => ''
  )
  return (
    <div className='flex justify-center mt-36'>
      <Card>
        {!isLoading && !isError && data.data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default Home