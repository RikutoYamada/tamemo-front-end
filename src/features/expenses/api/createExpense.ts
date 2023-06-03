import { axios } from "@/lib/axios"
import cookies from "@/utils/cookies"

export const createExpense = (data) => {
  const userId = cookies.get().current_user_id
  return axios.post(`/users/${userId}/expenses`, data)
}