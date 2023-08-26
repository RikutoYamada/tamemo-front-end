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

export type LoginCredentials = {
  email: string
  password: string
}