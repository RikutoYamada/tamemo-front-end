import { Expense } from '@/features/expenses/types'
import { axios } from '@/lib/axios'
import cookies from '@/utils/cookies'

export const getExpenses = async (maxRecords?: number): Promise<Expense[]> => {
  const userId = cookies.get().current_user_id
  const endPoint = maxRecords
    ? `/users/${userId}/expenses?max_records=${maxRecords}`
    : `/users/${userId}/expenses`

  const response = await axios.get<Expense[]>(endPoint)
  return response.data
}
