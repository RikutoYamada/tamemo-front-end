import { ExpenseForPost } from '@/features/expenses/types'
import { axios } from '@/lib/axios'
import cookies from '@/utils/cookies'

export const createExpense = (expense: ExpenseForPost) => {
  const userId = cookies.get().current_user_id
  return axios.post(`/users/${userId}/expenses`, expense)
}
