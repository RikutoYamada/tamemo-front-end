import Link from 'next/link'

const Header = (
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
        <div className='flex w-36 justify-between'>
          <Link href='/signin' className='text-teal-100 hover:text-white'>ログイン</Link>
          <Link href='/signin' className='text-teal-100 hover:text-white'>新規登録</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header