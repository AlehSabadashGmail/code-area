import axios from 'axios'
const apiClient = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://core-area-api.herokuapp.com/',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiNmIyNWY0LTg1YmUtNGQyMy1iOTMyLWIwODlkZGViMDRjMiIsImVtYWlsIjoiemFtb3JhbWF4d2VsbEBpbnNlY3R1cy5jb20iLCJ1c2VyX25hbWUiOiJNQWc0b3dheWpXdCIsInBhc3N3b3JkIjoiNUhURE9QNHd4Y3VJTmpTIiwiZXhwIjoxNjU1MjUwMzE3OTIxLCJpYXQiOjE2NTUyNDMxMTc5MjF9.4krHDEjiEsqdHYfIH5RkY_Xu__9A64BHo6uT8BfCVlw',
    },
  })

  return axiosInstance
}

export default apiClient
