import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { register } from '@/features/auth/api/register'
import cookies from '@/utils/cookies'

export const useRegister = () => {
  const router = useRouter()
  return useMutation(register, {
    onSuccess: async (response) => {
      cookies.set('current_user_id', response.id.toString())
      await router.push('/')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
