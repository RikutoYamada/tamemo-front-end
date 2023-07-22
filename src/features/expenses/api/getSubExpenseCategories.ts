import { axios } from "@/lib/axios"
import cookies from "@/utils/cookies"

export const getSubExpenseCategories = (mainExpenseCategoryId :string) => {
  const userId = cookies.get().current_user_id
  return axios.get(`/users/${userId}/sub_expense_categories?main_expense_category_id=${mainExpenseCategoryId}`)
}