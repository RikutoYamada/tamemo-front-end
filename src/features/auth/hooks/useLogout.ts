import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { logout } from '@/features/auth/api/logout'
import cookies from "@/utils/cookies"

export const useLogout = () => {
  const router = useRouter()
  return useMutation(logout, {
    onSuccess: () => {
      cookies.destroy({name: 'current_user_id'})
      router.push('/')
    }
  })
}