import { Button } from '@mui/material';
import { Card } from '@/components/elements/Card'
import { useCreateExpense } from '../../hooks/useCreateExpense'
import { Expense } from '../../api/createExpense'
import { useState } from 'react'
import { TextField } from '@/components/elements/TextField/TextField'
import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { DatePicker } from '@/components/elements/DatePicker'
import { useGetSubExpenseCategories } from '../../hooks/useGetSubExpenseCategories'
import ja from 'date-fns/locale/ja'



const mainExpenseCategories = [
  { id: 1, name: '食費' },
  { id: 2, name: '交通費' }
]

export const EasyExpenseRegistration = () => {
  const [expendedAt, setExpendedAt] = useState(new Date())
  const [amount, setAmount] = useState<number>(0)
  const [store, setStore] = useState<string>('')

  const [mainExpenseCategory, setMainExpenseCategory] = useState({ id: 1, name: '食費' })


  const { mutate } = useCreateExpense()
  const { data: subExpenseCategories, isLoading } = useGetSubExpenseCategories(mainExpenseCategory.id)
  const [subExpenseCategory, setSubExpenseCategory] = useState({ id: 1, name: '食料品'})

  const expense: Expense = {
    subExpenseCategoryId: subExpenseCategory.id,
    amount,
    store,
    expendedAt: expendedAt.toISOString().slice(0, 10)
  }

  return (
    <Card size="md" className="mx-auto mt-8">

      <Button color="secondary" variant="contained">Hello World</Button>
      <DatePicker selected={expendedAt} onChange={(selectedDate: Date) => { setExpendedAt(selectedDate || expendedAt) }} />
      <Listbox value={mainExpenseCategory} onChange={setMainExpenseCategory}>
        <Listbox.Button className='cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
          <div className='flex justify-between'>
            <div className='text-left'>
              {mainExpenseCategory.name}
            </div>
            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
        </Listbox.Button>
        <Listbox.Options className='cursor-pointer shadow appearance-none border rounded'>
          {mainExpenseCategories.map((mainExpenseCategory) => (
            <Listbox.Option
              key={mainExpenseCategory.id}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 px-3 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={mainExpenseCategory}
            >
              {mainExpenseCategory.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <Listbox value={subExpenseCategory} onChange={setSubExpenseCategory}>
        <Listbox.Button className='cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
          <div className='flex justify-between'>
            <div className='text-left'>
              {subExpenseCategory.name}
            </div>
            <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
        </Listbox.Button>
        <Listbox.Options className='cursor-pointer shadow appearance-none border rounded'>
          {subExpenseCategories?.data.map((subExpenseCategory) => (
            <Listbox.Option
              key={subExpenseCategory.id}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 px-3 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={subExpenseCategory}
            >
              {subExpenseCategory.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <div className='mt-4'>
        <TextField
          className='mb-4'
          type='number'
          placeholder='金額を入力してください'
          onChange={e => setAmount(Number(e.target.value))}
          label='金額' />
        <TextField
          className='mb-4'
          placeholder='内容を入力してください（お店など）'
          onChange={e => setStore(e.target.value)}
          label='内容' />
        <Button type='submit' onClick={() => { mutate(expense) }} isLoading={isLoading}>保存</Button>
      </div>
    </Card>
  )
}