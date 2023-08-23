import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'

import { Button } from '@/components/elements/Button'
import { DatePicker } from '@/components/elements/DatePicker'
import { SelectBox } from '@/components/elements/SelectBox'
import { TextField } from '@/components/elements/TextField'
import { MAIN_EXPENSE_CATEGORIES } from '@/const'
import { useCreateExpense } from '@/features/expenses/hooks/useCreateExpense'
import { useGetSubExpenseCategories } from '@/features/expenses/hooks/useGetSubExpenseCategories'
import { ExpenseForPost, SubExpenseCategory } from '@/features/expenses/types'

const handleChangeSelectedCategory = (
  event: SelectChangeEvent,
  setCategoryId: (categoryId: string) => void,
  setIsSubExpenseCategoryIdLoading?: (isLoading: boolean) => void,
) => {
  setCategoryId(event.target.value)
  if (setIsSubExpenseCategoryIdLoading) {
    setIsSubExpenseCategoryIdLoading(true)
  }
}

export const EasyExpenseRegistration = () => {
  const [amount, setAmount] = useState<number>(0)
  const [expendedAt, setExpendedAt] = useState<Date>(new Date())
  const [detail, setDetail] = useState<string>('')
  const [mainExpenseCategoryId, setMainExpenseCategoryId] = useState('1')
  const [subExpenseCategoryId, setSubExpenseCategoryId] = useState('1')
  const [isSubExpenseCategoryIdLoading, setIsSubExpenseCategoryIdLoading] = useState(false)

  const expense: ExpenseForPost = {
    amount,
    detail,
    expendedAt: expendedAt?.toISOString().slice(0, 10),
    subExpenseCategoryId,
  }

  const { mutate, isLoading } = useCreateExpense()
  const { data: rawSubExpenseCategories, isLoading: isSubExpenseCategoriesLoading } =
    useGetSubExpenseCategories(mainExpenseCategoryId)

  const subExpenseCategories = rawSubExpenseCategories?.map((subCategory: SubExpenseCategory) => {
    return { id: subCategory.id, name: subCategory.name }
  })

  useEffect(() => {
    if (rawSubExpenseCategories) {
      setSubExpenseCategoryId(rawSubExpenseCategories[0].id.toString())
      setIsSubExpenseCategoryIdLoading(false)
    }
  }, [rawSubExpenseCategories])

  return (
    <Card sx={{ margin: '10px', width: '50%' }}>
      <Box sx={{ margin: '20px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>カンタン支出入力</Typography>
        <Divider sx={{ borderColor: '#26a69a', borderWidth: '2px', marginBottom: '15px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <SelectBox
                id='main-category-select'
                label='大項目'
                options={MAIN_EXPENSE_CATEGORIES}
                selectedId={mainExpenseCategoryId}
                onChange={(event) =>
                  handleChangeSelectedCategory(
                    event,
                    setMainExpenseCategoryId,
                    setIsSubExpenseCategoryIdLoading,
                  )
                }
              />
              <SelectBox
                id='sub-category-select'
                label='中項目'
                options={subExpenseCategories}
                selectedId={subExpenseCategoryId}
                isLoading={isSubExpenseCategoriesLoading || isSubExpenseCategoryIdLoading}
                onChange={(event) => handleChangeSelectedCategory(event, setSubExpenseCategoryId)}
              />
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
              onChange={(event) => setAmount(Number(event.target.value))}
              type='number'
              size='small'
              placeholder='金額を入力してください'
              sx={{ width: '75%', marginRight: '10px' }}
            />
            <Typography>円</Typography>
          </Box>
          <TextField
            id='detail'
            label='詳細'
            onChange={(event) => setDetail(event.target.value)}
            size='small'
            placeholder='支出の詳細を入力してください(お店など）'
            sx={{ width: '100%' }}
          />
          <Box sx={{ display: 'flex' }}>
            <Button
              variant='contained'
              onClick={() => {
                mutate(expense)
              }}
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
