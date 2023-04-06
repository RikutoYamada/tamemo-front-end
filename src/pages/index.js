import Card from '@/components/elements/Card/Card'
import { axios } from "@/lib/axios";
import { useQuery } from 'react-query';
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil';
import { authenticationState } from '@/features/auth/stores/isAuthenticatedState'
import { Button } from '@/components/elements/Button'
import { parseCookies } from 'nookies';
import nookies from 'nookies'

export async function getServerSideProps(context) {

  const cookies = nookies.get(context)
  return {
    props: { layout: cookies.user_id ? true : false}
  };
}

const Home = (props) => {
  const [authenticationStatus, setAuthenticationStatus] = useRecoilState(authenticationState)
  const router = useRouter()
  const { isLoading, isError, data, status } = useQuery(['repoData'],
    () => axios.get('/users'), {
    retry: 0,
    onSuccess: () => {
    },
    onError: () => {
    }
  })

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