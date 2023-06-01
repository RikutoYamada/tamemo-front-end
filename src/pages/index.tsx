import cookies from "@/utils/cookies"
import { NextPageContext } from 'next';
import { RecentHistory } from "@/features/history/components/RecentHistory";

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  return {
    props: { currentUserId: currentUserId || null }
  };
}

const Home = () => {
  return (
    <>
      <RecentHistory />
    </>
  )
}

export default Home