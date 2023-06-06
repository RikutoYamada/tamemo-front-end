import { axios } from "@/lib/axios"
import cookies from "@/utils/cookies"

export type Expense = {
  subExpenseCategoryId: number
  amount: number
  store: string
  expendedAt: string
}

export const createExpense = (expense: Expense) => {
  const userId = cookies.get().current_user_id
  return axios.post(`/users/${userId}/expenses`, expense)
}