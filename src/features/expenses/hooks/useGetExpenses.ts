import { useQuery } from 'react-query'
import { getExpenses } from '../api/getExpenses'

export const useGetExpenses = (maxRecords?: number) => {
  return useQuery('expenses', () => getExpenses(maxRecords))
}
