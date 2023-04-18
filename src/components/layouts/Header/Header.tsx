import Link from 'next/link'
import { useLogout } from '@/features/auth/hooks/useLogout'
import Image from 'next/image'

export type HeaderProps = {
  currentUserId: string | null
}
export const Header = ({
  currentUserId
}: HeaderProps
) => {

  const { data, error, isLoading, mutate } = useLogout()
  return (
    <header>
      <nav className='flex bg-teal-500 p-6 justify-between items-center'>
        <Link href='/' passHref>
          <div className='flex items-center'>
            <Image alt='tamemo_top_page' src='tamemo.svg' width={35} height={35}/>
            <span className='font-semibold text-2xl text-white pl-2'>tamemo</span>
          </div>
        </Link>
        {currentUserId &&
          <button className='text-teal-100 hover:text-white' onClick={() => mutate()}>ログアウト</button>
        }
        {!currentUserId &&
          <div className='flex w-36 justify-between'>
            <Link href='/login' className='text-teal-100 hover:text-white'>ログイン</Link>
            <Link href='/login' className='text-teal-100 hover:text-white'>新規登録</Link>
          </div>
        }
      </nav>
    </header>
  )
}