import { useMutation } from 'react-query'

import { createExpense } from '@/features/expenses/api/createExpense'

export const useCreateExpense = () => {
  return useMutation(createExpense, {
    onSuccess: () => {
      console.log('onSuccess')
    },
    onError: () => {
      console.log('onError')
    },
  })
}
