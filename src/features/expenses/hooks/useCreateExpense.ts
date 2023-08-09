import { useMutation } from 'react-query'
import { createExpense } from '../api/createExpense'

export const useCreateExpense = () => {
  return useMutation(createExpense, {
    onSuccess: (res) => {
      console.log('onSuccess')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
