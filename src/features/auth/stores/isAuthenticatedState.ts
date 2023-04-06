import { atom } from 'recoil'

type authenticationStatus = 'authenticated' | 'notAuthenticated' | 'loading'
export const authenticationState = atom<authenticationStatus>({
  key: 'authenticationStatus',
  default: 'notAuthenticated'
})