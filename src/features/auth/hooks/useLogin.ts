import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { login } from '@/features/auth/api/login'

export const useLogin = () => {
  const router = useRouter()
  return useMutation(login, {
    onSuccess: () => {
      console.log('onSuccess')
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/')
    },
    onError: () => {
      console.log('onError')
    }
  })
}
