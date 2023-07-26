import { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select';

import { useCreateExpense } from '../../hooks/useCreateExpense'
import { useGetSubExpenseCategories } from '../../hooks/useGetSubExpenseCategories'
import { Button } from '@/components/elements/Button'
import { TextField } from '@/components/elements/TextField'
import { SelectBox } from '@/components/elements/SelectBox'
import { DatePicker } from '@/components/elements/DatePicker'
import { Expense } from '../../api/createExpense'

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

const handleChangeSelectedCategory = (event: SelectChangeEvent, setCategoryId: Function) => {
  setCategoryId(event.target.value as string)
}

export const EasyExpenseRegistration = () => {
  const [amount, setAmount] = useState<number>(0)
  const [expendedAt, setExpendedAt] = useState<Date>(new Date())
  const [detail, setDetail] = useState<string>('')
  const [mainExpenseCategoryId, setMainExpenseCategoryId] = useState('')
  const [subExpenseCategoryId, setSubExpenseCategoryId] = useState('')

  const expense: Expense = {
    amount,
    detail,
    expendedAt: expendedAt?.toISOString().slice(0, 10),
    subExpenseCategoryId
  }

  const { mutate, isLoading } = useCreateExpense()
  const { data: rawSubExpenseCategories } = useGetSubExpenseCategories(mainExpenseCategoryId)

  const subExpenseCategories = rawSubExpenseCategories?.data.map((subCategory: SubExpenseCategory) => {
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
                onChange={event => handleChangeSelectedCategory(event, setMainExpenseCategoryId)} />
              <SelectBox
                id='sub-category-select'
                label='中項目'
                options={subExpenseCategories}
                selectedId={subExpenseCategoryId}
                onChange={event => handleChangeSelectedCategory(event, setSubExpenseCategoryId)} />
            </Box>
            {/*
              If selectedDate is null, set the default value to the current date.
              selectedDate forgives null, but setExpendedAt does not.
            */}
            <DatePicker
              value={expendedAt}
              onCahnge={(selectedDate) => setExpendedAt(selectedDate ? selectedDate : new Date())}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id='amount'
              label='金額'
              onChange={e => setAmount(Number(e.target.value))}
              type='number'
              size='small'
              placeholder='金額を入力してください'
              sx={{ width: '75%', marginRight: '10px' }}
            />
            <Typography>
              円
            </Typography>
          </Box>
          <TextField
            id='detail'
            label='詳細'
            onChange={e => setDetail(e.target.value)}
            size='small'
            placeholder='支出の詳細を入力してください(お店など）'
            sx={{ width: '100%' }}
          />
          <Box sx={{ display: 'flex', }}>
            <Button
              variant='contained'
              onClick={() => { mutate(expense) }}
              isLoading={isLoading}
              sx={{ width: '100%' }}
            >
              保存する
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}