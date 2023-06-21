import { useQuery } from 'react-query';
import { getSubExpenseCategories } from '../api/getSubExpenseCategories';

export const useGetSubExpenseCategories = (mainExpenseCategoryId: number) => {
  return useQuery(['subExpenseCategories', mainExpenseCategoryId], () => getSubExpenseCategories(mainExpenseCategoryId))
}