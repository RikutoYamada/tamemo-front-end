import { z } from 'zod'

import { loginValidationSchema, registerValidationSchema } from '@/utils/validationSchema'

export type UserResponse = {
  createdAt: string
  email: string
  id: number
  isAdmin: boolean
  passwordDigest: string
  updatedAt: string
}

export type NewUser = z.infer<typeof registerValidationSchema>

export type LoginCredentials = z.infer<typeof loginValidationSchema>
