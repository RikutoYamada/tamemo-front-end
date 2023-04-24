import { axios } from "@/lib/axios";

export type RegisterCredentials = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export const register = (data: RegisterCredentials) => {
  return axios.post('/users', data)
} 