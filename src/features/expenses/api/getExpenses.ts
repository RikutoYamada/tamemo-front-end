import { axios } from '@/lib/axios'
import cookies from '@/utils/cookies'

export const getExpenses = (maxRecords?: number) => {
  const userId = cookies.get().current_user_id

  if (maxRecords) {
    return axios.get(`/users/${userId}/expenses?max_records=${maxRecords}`)
  }

  return axios.get(`/users/${userId}/expenses`)
}
