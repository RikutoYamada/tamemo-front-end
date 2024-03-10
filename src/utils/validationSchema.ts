import { z } from 'zod'

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: 'メールアドレスを入力してください' })
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: 'メールアドレスを正しく入力してください' }),
  password: z
    .string({ required_error: 'パスワードを入力してください' })
    .min(1, { message: 'パスワードを入力してください' }),
})

export const registerValidationSchema = z.object({
  name: z
    .string({ required_error: 'ユーザー名を入力してください' })
    .min(1, { message: 'ユーザー名を入力してください' }),
  email: z
    .string({ required_error: 'メールアドレスを入力してください' })
    .min(1, { message: 'メールアドレスを入力してください' })
    .email({ message: 'メールアドレスを正しく入力してください' }),
  password: z
    .string({ required_error: 'パスワードを入力してください' })
    .min(1, { message: 'パスワードを入力してください' }),
})
