import { axios } from "@/lib/axios"
import cookies from "@/utils/cookies"

export const getExpenses = () => {
  const userId = cookies.get().current_user_id
  return axios.get(`/users/${userId}/expenses`)
}