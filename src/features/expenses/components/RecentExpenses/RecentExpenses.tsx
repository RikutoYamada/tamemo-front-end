import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import { useGetExpenses } from '@/features/expenses/hooks/useGetExpenses'
import { CustomLink } from '@/components/elements/CustomLink'

type Expense = {
  id: number
  amount: number
  mainCategory: string
  subCategory: string
  detail: string
  expendedAt: string
}

export const RecentExpenses = () => {
  const { data: expenses } = useGetExpenses()

  return (
    <Card sx={{ margin: '10px', width: '50%' }}>
      <Box sx={{ margin: '20px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>最近の支出</Typography>
        <Divider sx={{ borderColor: '#26a69a', borderWidth: '2px', marginBottom: '15px' }} />
        {expenses?.data.map((expense: Expense) => (
          <Box key={expense.id}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography sx={{ color: '#808080', fontSize: 13 }}>
                  {expense.expendedAt.replace(/-/g, '/')} {expense.mainCategory} ＞{' '}
                  {expense.subCategory}
                </Typography>
                <Typography>{expense.detail}</Typography>
              </Box>
              <Typography>-{expense.amount}円</Typography>
            </Box>
            <Divider />
          </Box>
        ))}
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '15px' }}>
          <CustomLink href='/history'>
            <ArrowCircleRightIcon fontSize='small' />
            <Typography>履歴の詳細を見る</Typography>
          </CustomLink>
        </Box>
      </Box>
    </Card>
  )
}
