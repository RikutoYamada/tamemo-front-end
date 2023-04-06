import { authenticationState } from '@/features/auth/stores/isAuthenticatedState'
import Link from 'next/link'
import { QueryClient, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import { parseCookies, setCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { GetServerSideProps, NextPageContext } from 'next'
import nookies from 'nookies'
import { useSyncExternalStore } from 'react'

export const Header = ({
  isAuthenticated = false
}
) => {
  return (
    <header>
      <nav className='flex bg-teal-500 p-6 justify-between'>
        <Link href='/' passHref>
          <span className='font-semibold text-xl text-white'>MyApp</span>
        </Link>
        {isAuthenticated &&
          <button className='text-teal-100 hover:text-white'>ログアウト</button>
        }
        {!isAuthenticated &&
          <div className='flex w-36 justify-between'>
            <Link href='/signin' className='text-teal-100 hover:text-white'>ログイン</Link>
            <Link href='/signin' className='text-teal-100 hover:text-white'>新規登録</Link>
          </div>
        }
      </nav>
    </header>
  )
}