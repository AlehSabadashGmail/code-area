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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MzRmYTc4LTEwMzgtNDQwOS1hNjJjLTAzMmQ2MDU1NDM1NiIsImVtYWlsIjoiYW5nZWxpYXdvb2RhcmRAaW5zZWN0dXMuY29tIiwidXNlcl9uYW1lIjoiUVRvWWF6blF6WEpObnh1SVEiLCJwYXNzd29yZCI6IlpPcnhWVEZER1U2RUxDR01tIiwiZXhwIjoxNjU1Mzk1NDc3OTE4LCJpYXQiOjE2NTUzODgyNzc5MTh9.5yW9Wuopcg57-XLH0cm5KRk9AMbzXv09lFIlV-XTC0k',
    },
  })

  return axiosInstance
}

export default apiClient
