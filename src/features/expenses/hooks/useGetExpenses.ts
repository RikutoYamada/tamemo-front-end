import { useQuery } from 'react-query'

import { getExpenses } from '@/features/expenses/api/getExpenses'

export const useGetExpenses = (maxRecords?: number) => {
  return useQuery('expenses', () => getExpenses(maxRecords))
}
