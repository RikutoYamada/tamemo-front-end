import { useQuery } from 'react-query';
import { getExpenses } from '../api/getExpenses';

export const useExpenses = () => {
  return useQuery('expenses', getExpenses)
}