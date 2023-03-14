import applyCaseMiddleware from "axios-case-converter"
import Axios, { AxiosInstance } from "axios"

import { API_URL } from "@/config"

export const axios: AxiosInstance = applyCaseMiddleware(Axios.create({
baseURL: API_URL,
withCredentials: true
}), {ignoreHeaders: true})