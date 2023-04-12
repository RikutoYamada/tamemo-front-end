import { axios } from "@/lib/axios"
import cookies from "@/utils/cookies"

export const getCurrentUser = () => {
  const userId = cookies.get().user_id 
  return axios.get(`/users/${userId}`)
}