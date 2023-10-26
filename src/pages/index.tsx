import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { NextPageContext } from 'next'

import { EasyExpenseRegistration } from '@/features/expenses/components/EasyExpenseRegistration'
import { RecentExpenses } from '@/features/expenses/components/RecentExpenses'
import cookies from '@/utils/cookies'

export function getServerSideProps(ctx: NextPageContext) {
  const authToken = cookies.get(ctx).token
  const isAuthenticated = !!authToken
  return {
    props: { isAuthenticated: isAuthenticated || null },
  }
}

const Home = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <EasyExpenseRegistration />
          <RecentExpenses />
        </Box>
      </Container>
    </>
  )
}

export default Home
