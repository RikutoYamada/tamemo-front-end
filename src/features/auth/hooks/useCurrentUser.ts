import { useQuery } from 'react-query'

import { getCurrentUser } from '@/features/auth/api/getCurrentUser'

export const useCurrentUser = () => {
  return useQuery('currentUser', getCurrentUser)
}
