import Link from 'next/link'
import { useGetExpenses } from "@/features/expenses/hooks/useGetExpenses";
import { Card } from "@/components/elements/Card";

type Expense = {
  id: number
  amount: number
  mainCategory: string
  subCategory: string
  store: string
  expendedAt: string
}

export const RecentHistory = () => {
  const { data } = useGetExpenses()
  return (
    <Card size="md" className="mx-auto mt-8">
      <h1 className="font-bold">最近の履歴</h1>
      {data?.data.map((expense: Expense) => (
        <div key={expense.id}>
          <h1 className="text-gray-400 text-xs">{expense.expendedAt.replace(/-/g, '/')}  {expense.mainCategory} ＞ {expense.subCategory}</h1>
          <div className="flex justify-between">
            <h1>{expense.store}</h1>
            <h1>-{expense.amount}円</h1>
          </div>
          <hr />
        </div>
      ))}
      <div className='flex flex-row-reverse mt-2'>
        <Link href='/history' className='text-blue-500'>履歴の詳細を見る</Link>
      </div>
    </Card>
  )
}