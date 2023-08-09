import cookies from '@/utils/cookies'
import { NextPageContext } from 'next'
import { EasyExpenseRegistration } from '@/features/expenses/components/EasyExpenseRegistration'
import { RecentExpenses } from '@/features/expenses/components/RecentExpenses'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  return {
    props: { currentUserId: currentUserId || null },
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
