import { axios } from "@/lib/axios";

export type LoginCredentials = {
  email: string
  password: string
}

export const login = (loginCredentials: LoginCredentials) => {
  return axios.post('/login', loginCredentials)
}