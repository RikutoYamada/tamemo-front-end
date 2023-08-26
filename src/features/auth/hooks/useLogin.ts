import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { login } from '@/features/auth/api/login'
import cookies from '@/utils/cookies'

export const useLogin = () => {
  const router = useRouter()
  return useMutation(login, {
    onSuccess: async (response) => {
      cookies.set('current_user_id', response.id.toString())
      await router.push('/')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
