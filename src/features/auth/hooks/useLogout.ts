import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { logout } from '@/features/auth/api/logout'
import cookies from '@/utils/cookies'

export const useLogout = () => {
  const router = useRouter()
  return useMutation(logout, {
    onSuccess: async () => {
      cookies.destroy('current_user_id')
      await router.push('/')
    },
  })
}
