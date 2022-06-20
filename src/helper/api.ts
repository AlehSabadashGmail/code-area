import axios from 'axios'

const api = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://core-area-api.herokuapp.com/',
    responseType: 'json',
    headers: {
      Authorization: 'super-token',
    },
  })

  return axiosInstance
}

export default api
