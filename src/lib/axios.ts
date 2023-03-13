import applyCaseMiddleware from "axios-case-converter"
import Axios from "axios"

import { API_URL } from "@/config"

export const axios = applyCaseMiddleware(Axios.create({
baseURL: API_URL
}), {ignoreHeaders: true})