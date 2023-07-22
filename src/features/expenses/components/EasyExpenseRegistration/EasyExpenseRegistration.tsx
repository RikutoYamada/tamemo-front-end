import Card from '@mui/material/Card'
import { useCreateExpense } from '../../hooks/useCreateExpense'
import { Expense } from '../../api/createExpense'
import { useState } from 'react'
import { TextField } from '@/components/elements/TextField'
import { useGetSubExpenseCategories } from '../../hooks/useGetSubExpenseCategories'
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@/components/elements/Button'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import { SelectBox } from '@/components/elements/SelectBox'
import { DatePicker } from '@/components/elements/DatePicker'

type SubExpenseCategory = {
  createdAt: string
  id: number
  mainExpenseCategoryId: number
  name: string
  updatedAt: string
  userId: number
}

const mainExpenseCategories = [
  { id: 1, name: '食費' },
  { id: 2, name: '交通費' }
]

export const EasyExpenseRegistration = () => {
  const handleChange = (event: SelectChangeEvent) => {
    setMainExpenseCategoryId(event.target.value as string)
  }

  const subhandleChange = (event: SelectChangeEvent) => {
    setSubExpenseCategoryId(event.target.value as string)
  }
  const [value, setValue] = useState<Date | null>(new Date());

  const [expendedAt, setExpendedAt] = useState(new Date())
  const [amount, setAmount] = useState<number>(0)
  const [store, setStore] = useState<string>('')

  const [mainExpenseCategoryId, setMainExpenseCategoryId] = useState('')
  const [subExpenseCategoryId, setSubExpenseCategoryId] = useState('')

  const { mutate, isLoading } = useCreateExpense()

  const expense: Expense = {
    subExpenseCategoryId,
    amount,
    store,
    expendedAt: value?.toISOString().slice(0, 10)
  }

  const { data } = useGetSubExpenseCategories(mainExpenseCategoryId)
  const subExpenseCategories = data?.data.map((subCategory: SubExpenseCategory) => {
    return { id: subCategory.id, name: subCategory.name }
  })
  return (
    <Card sx={{ margin: '10px', width: '50%' }}>
      <Box sx={{ margin: '20px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          カンタン支出入力
        </Typography>
        <Divider sx={{ borderColor: '#26a69a', borderWidth: '2px', marginBottom: '15px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <SelectBox
                id='main-category-select'
                label='大項目'
                options={mainExpenseCategories}
                selectedId={mainExpenseCategoryId}
                onChange={handleChange} />
              <SelectBox
                id='sub-category-select'
                label='中項目'
                options={subExpenseCategories}
                selectedId={subExpenseCategoryId}
                onChange={subhandleChange} />
            </Box>
            <DatePicker value={value} onCahnge={(selectedDate) => setValue(selectedDate)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id='amount'
              label='金額'
              onChange={e => setAmount(Number(e.target.value))}
              type='number'
              size='small'
              sx={{ width: '75%', marginRight: '10px' }}
            />
            <Typography>
              円
            </Typography>
          </Box>
          <TextField
            id='detail'
            label='詳細'
            onChange={e => setStore(e.target.value)}
            size='small'
            sx={{ width: '100%' }}
          />
          <Box sx={{ display: 'flex', }}>
            <Button variant='contained' onClick={() => { mutate(expense) }} isLoading={isLoading} sx={{ width: '100%' }}>保存する</Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}