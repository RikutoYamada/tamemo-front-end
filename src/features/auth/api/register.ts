import { NewUser } from '@/features/auth/types'
import { UserResponse } from '@/features/auth/types'
import { axios } from '@/lib/axios'

export const register = async (newUser: NewUser): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>('/users', newUser)
  return response.data
}
