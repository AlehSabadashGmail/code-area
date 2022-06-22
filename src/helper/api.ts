import axios from 'axios'

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const

export const API_HOSTS = '/'
export const BASE_URL = 'https://core-area-api.herokuapp.com'

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://core-area-api.herokuapp.com/',
    responseType: 'json',
    headers: {
      Authorization: 'super-token',
    },
  })

  return axiosInstance
}

export default apiClient
