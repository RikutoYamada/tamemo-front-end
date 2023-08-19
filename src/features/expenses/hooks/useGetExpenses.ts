import { useQuery } from 'react-query'

import { getExpenses } from '@/features/expenses/api/getExpenses'

export const useGetExpenses = () => {
  return useQuery('expenses', getExpenses)
}
