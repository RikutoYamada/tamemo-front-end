import { useQuery } from 'react-query'

import { getSubExpenseCategories } from '@/features/expenses/api/getSubExpenseCategories'

export const useGetSubExpenseCategories = (mainExpenseCategoryId: string) => {
  return useQuery(['subExpenseCategories', mainExpenseCategoryId], () =>
    getSubExpenseCategories(mainExpenseCategoryId),
  )
}
