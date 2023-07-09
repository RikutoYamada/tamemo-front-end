import { axios } from "@/lib/axios";

export type RegistrationData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export const register = (registrationData: RegistrationData) => {
  return axios.post('/users', registrationData)
} 