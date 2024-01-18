import axios, { Axios, AxiosResponse } from 'axios'
import { apiUrl } from '../../config'

class Api {
  private baseURL: string
  private api: Axios

  constructor() {
    this.baseURL = apiUrl
    this.api = axios.create({ timeout: 100000 })
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(
        `${this.baseURL}${endpoint}`
      )
      return response.data
    } catch (error) {
      console.error('Error on GET request:', error)
      throw error
    }
  }
}

export default new Api()
