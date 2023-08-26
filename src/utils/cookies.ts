import { NextPageContext } from 'next'
import nookies from 'nookies'

export type Arguments = {
  ctx?: NextPageContext
  name: string
}
const cookies = {
  get: (ctx?: NextPageContext) => {
    return nookies.get(ctx)
  },
  set: (name: string, value: string, ctx?: NextPageContext) => {
    nookies.set(ctx, name, value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  },
  destroy: (name: string, ctx?: NextPageContext) => {
    nookies.destroy(ctx, name)
  },
}

export default cookies
