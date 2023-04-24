import cookies from "@/utils/cookies"
import { NextPageContext } from 'next';
import { Tab } from '@headlessui/react'

export async function getServerSideProps(ctx: NextPageContext) {
  const currentUserId = cookies.get(ctx).current_user_id
  return {
    props: { currentUserId: currentUserId || null }
  };
}

const Home = () => {
  return (
    <div className='flex justify-center mt-36'>
      <Tab.Group>
        <Tab.List>
          <Tab>a</Tab>
          <Tab>b</Tab>
          <Tab>c</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>content a</Tab.Panel>
          <Tab.Panel>content b</Tab.Panel>
          <Tab.Panel>content c</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Home