import { useQuery } from 'react-query'
import { getExpenses } from '../api/getExpenses'

export const useGetExpenses = () => {
  return useQuery('expenses', getExpenses)
}
