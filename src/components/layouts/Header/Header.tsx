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
      <nav className='bg-teal-500 px-20'>
        <div className='flex py-6 justify-between items-center'>
          <Link href='/' passHref>
            <div className='flex items-center'>
              <Image alt='tamemo_top_page' src='tamemo.svg' width={35} height={35} />
              <span className='font-semibold text-3xl text-white pl-2'>tamemo</span>
            </div>
          </Link>
          {currentUserId &&
            <button className='text-teal-100 hover:text-white' onClick={() => mutate()}>ログアウト</button>
          }
          {!currentUserId &&
            <div className='flex w-36 justify-between'>
              <Link href='/login' className='text-teal-100 hover:text-white'>ログイン</Link>
              <Link href='/register' className='text-teal-100 hover:text-white'>新規登録</Link>
            </div>
          }
        </div>
        <div className='flex justify-between w-2/3'>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>ホーム</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>履歴</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>予算</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>資産</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>レポート</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>掲示板</Link>
          <Link href='#' className='text-teal-100 hover:text-white text-lg'>設定</Link>
        </div>
      </nav>
    </header>
  )
}