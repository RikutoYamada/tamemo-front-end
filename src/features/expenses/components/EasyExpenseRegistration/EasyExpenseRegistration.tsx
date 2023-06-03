import { Button } from '@/components/elements/Button'
import { Card } from '@/components/elements/Card'
import { useCreateExpense } from '../../hooks/useCreateExpense'


export const EasyExpenseRegistration = () => {
  const amount = 1234
  const store = 'がブリチキン'
  const expendedAt = '2023-06-01'
  const subExpenseCategoryId = 3
  const params = {
    amount,
    store,
    expendedAt,
    subExpenseCategoryId
  }

  const { data, error, isLoading, mutate } = useCreateExpense()

  return (
    <Card>
      <Button type='submit' onClick={() => { mutate(params) }} isLoading={isLoading}>保存</Button>
    </Card>
  )
}