import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { register } from '@/features/auth/api/register'
import cookies from '@/utils/cookies'

export const useRegister = () => {
  const router = useRouter()
  return useMutation(register, {
    onSuccess: (res) => {
      cookies.set({ name: 'current_user_id', value: res.data.id })
      router.push('/')
    },
    onError: () => {
      console.log('onError')
    }
  })
}
