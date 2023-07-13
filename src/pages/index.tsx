import cookies from "@/utils/cookies"
import { NextPageContext } from 'next'
// import { RecentHistory } from "@/features/history/components/RecentHistory"
// import { EasyExpenseRegistration } from "@/features/expenses/components/EasyExpenseRegistration"
import { RecentExpenses } from "@/features/expenses/components/RecentExpenses";
import Container from '@mui/material/Container'

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  return {
    props: { currentUserId: currentUserId || null }
  };
}

const Home = () => {
  return (
    <>
      <Container>
        <RecentExpenses />
      </Container>
    </>
  )
}

export default Home