import { Card } from '@/components/elements/Card'
import cookies from "@/utils/cookies"
import { NextPageContext } from 'next';

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  return {
    props: { currentUserId: currentUserId || null }
  };
}

const Home = () => {
  return (
    <div className='flex justify-center mt-36'>
      <Card>
      </Card>
    </div>
  )
}

export default Home