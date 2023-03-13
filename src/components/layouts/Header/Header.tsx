import Link from 'next/link'

export const Header = (
  {
    isSignedIn = false
  }
) => {
  return (
    <header>
      <nav className='flex bg-teal-500 p-6 justify-between'>
        <Link href='/' passHref>
          <span className='font-semibold text-xl text-white'>MyApp</span>
        </Link>
        {isSignedIn && 
          <button className='text-teal-100 hover:text-white'>ログアウト</button>
        }
        {!isSignedIn &&
          <div className='flex w-36 justify-between'>
            <Link href='/signin' className='text-teal-100 hover:text-white'>ログイン</Link>
            <Link href='/signin' className='text-teal-100 hover:text-white'>新規登録</Link>
          </div>
        }
      </nav>
    </header>
  )
}