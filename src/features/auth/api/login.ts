import { UserResponse, LoginCredentials } from '@/features/auth/types'
import { axios } from '@/lib/axios'

export const login = async (loginCredentials: LoginCredentials): Promise<UserResponse> => {
  const response = await axios.post<UserResponse>('/login', loginCredentials)
  return response.data
}
