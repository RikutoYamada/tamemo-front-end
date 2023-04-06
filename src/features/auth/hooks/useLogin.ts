import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { login } from '@/features/auth/api/login'
import { setCookie } from 'nookies'

export const useLogin = () => {
  const router = useRouter()
  return useMutation(login, {
    onSuccess: (res) => {
      console.log('onSuccess')
      console.log(res.data.id)
      setCookie(null, 'user_id', res.data.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      router.push('/')
    },
    onError: () => {
      console.log('onError')
    }
  })
}
