import Axios, { AxiosInstance } from 'axios'
import applyCaseMiddleware from 'axios-case-converter'

import { API_URL } from '@/const'

export const axios: AxiosInstance = applyCaseMiddleware(
  Axios.create({
    baseURL: API_URL,
    withCredentials: true,
  }),
  { ignoreHeaders: true },
)
