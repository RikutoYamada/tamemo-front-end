import { axios } from '@/lib/axios'
import cookies from '@/utils/cookies'

export type Expense = {
  subExpenseCategoryId: string
  amount: number
  detail: string
  expendedAt: string
}

export const createExpense = (expense: Expense) => {
  const userId = cookies.get().current_user_id
  return axios.post(`/users/${userId}/expenses`, expense)
}
