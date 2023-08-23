import { SubExpenseCategory } from '@/features/expenses/types'
import { axios } from '@/lib/axios'
import cookies from '@/utils/cookies'

export const getSubExpenseCategories = async (
  mainExpenseCategoryId: string,
): Promise<SubExpenseCategory[]> => {
  const userId = cookies.get().current_user_id
  const response = await axios.get<SubExpenseCategory[]>(
    `/users/${userId}/sub_expense_categories?main_expense_category_id=${mainExpenseCategoryId}`,
  )
  return response.data
}
