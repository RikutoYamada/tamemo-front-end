import { NextPageContext } from 'next'
import nookies from 'nookies'

export type argumentsOfSetFunction = {
  ctx?: NextPageContext
  name: string
  value: string
}
const cookies = {
  get: (ctx?: NextPageContext) => {
    return nookies.get(ctx)
  },
  set: ({ctx, name, value}: argumentsOfSetFunction) => {
    nookies.set(ctx, name, value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }
}

export default cookies