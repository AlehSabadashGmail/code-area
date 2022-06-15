import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token') || '')

const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://core-area-api.herokuapp.com/',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })

  return axiosInstance
}

export default apiClient
