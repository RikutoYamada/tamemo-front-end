import { z } from 'zod'

import { loginValidationSchema } from '@/utils/validationSchema'

export type UserResponse = {
  createdAt: string
  email: string
  id: number
  isAdmin: boolean
  passwordDigest: string
  updatedAt: string
}

export type NewUser = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type LoginCredentials = z.infer<typeof loginValidationSchema>
