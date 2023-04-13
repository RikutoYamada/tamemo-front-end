import Link from 'next/link'

export type HeaderProps = {
  currentUserId: string | null
}
export const Header = ({
  currentUserId
}: HeaderProps
) => {
  return (
    <header>
      <nav className='flex bg-teal-500 p-6 justify-between'>
        <Link href='/' passHref>
          <span className='font-semibold text-xl text-white'>tamemo</span>
        </Link>
        {currentUserId &&
          <button className='text-teal-100 hover:text-white'>ログアウト</button>
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