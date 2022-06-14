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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4ZTE2NjIyLTU2ZTUtNDNjZi04MTM3LTAyMzBjMWNhOGQ0ZCIsImVtYWlsIjoiYmVybmFyZGJvbmRAaW5zZWN0dXMuY29tIiwidXNlcl9uYW1lIjoiWXRTdFdia3BRM3VpMiIsInBhc3N3b3JkIjoiRldlcDhvQzhtOU5uWjgiLCJleHAiOjE2NTUyMjI1MTMwMTMsImlhdCI6MTY1NTIxNTMxMzAxM30.E2ljeJO-RF4PE-J6YXQdQ1T3TEUctm_Nxv60qAKtn7Y',
    },
  })

  return axiosInstance
}

export default apiClient
