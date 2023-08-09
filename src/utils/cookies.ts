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
  set: ({ ctx, name, value }: Arguments & { value: string }) => {
    nookies.set(ctx, name, value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  },
  destroy: ({ ctx, name }: Arguments) => {
    nookies.destroy(ctx, name)
  },
}

export default cookies
