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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM4ZTE2NjIyLTU2ZTUtNDNjZi04MTM3LTAyMzBjMWNhOGQ0ZCIsImVtYWlsIjoiYmVybmFyZGJvbmRAaW5zZWN0dXMuY29tIiwidXNlcl9uYW1lIjoiWXRTdFdia3BRM3VpMiIsInBhc3N3b3JkIjoiRldlcDhvQzhtOU5uWjgiLCJleHAiOjE2NTUzNzI3OTc5OTIsImlhdCI6MTY1NTM2NTU5Nzk5M30.I4Yxe6Is76KyL4KsYp4plSnGVvjJnLqlcVbv6awNSek',
    },
  })

  return axiosInstance
}

export default apiClient
