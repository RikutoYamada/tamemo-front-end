import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { login } from '@/features/auth/api/login'
import cookies from '@/utils/cookies'

export const useLogin = () => {
  const router = useRouter()
  return useMutation(login, {
    onSuccess: (res) => {
      cookies.set({ name: 'current_user_id', value: res.data.id })
      router.push('/')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
