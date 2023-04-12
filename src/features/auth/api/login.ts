import { axios } from "@/lib/axios";

export type LoginCredentials = {
  email: string
  password: string
}

export const login = (data:LoginCredentials) => {
  return axios.post('/login', data)
}