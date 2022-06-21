import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { API_HOSTS, BASE_URL, HTTP_METHODS } from '../helper/api'

interface IRequest<TData = Object> extends Omit<AxiosRequestConfig, 'data'> {
  prefixURL?: string
  data?: TData
}

const defaultConfig: IRequest = {
  prefixURL: '/',
  baseURL: BASE_URL,
  method: HTTP_METHODS.GET,
  timeout: 30 * 1000,
}

class Fetcher {
  private instance: AxiosInstance

  constructor(config = defaultConfig) {
    const hostURL = config.baseURL || defaultConfig.baseURL
    const prefixURL = config.prefixURL || defaultConfig.prefixURL

    this.instance = axios.create({
      ...defaultConfig,
      ...config,
      baseURL: [prefixURL, hostURL].join(''),
    })

    this.instance.interceptors.request.use((config) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiNmIyNWY0LTg1YmUtNGQyMy1iOTMyLWIwODlkZGViMDRjMiIsImVtYWlsIjoiemFtb3JhbWF4d2VsbEBpbnNlY3R1cy5jb20iLCJ1c2VyX25hbWUiOiJNQWc0b3dheWpXdCIsInBhc3N3b3JkIjoiNUhURE9QNHd4Y3VJTmpTIiwiZXhwIjoxNjU1ODE1ODYwNzA0LCJpYXQiOjE2NTU4MDg2NjA3MDR9.7knk7_vrhWUu_O5XbEZT9VBjXnAQOHRC4xOkUldIe8E'

      if (!token) {
        return config
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      }

      return { ...config, headers }
    })

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    )
  }

  handlerCatch = <TResponse>(e: AxiosError<TResponse>) => {
    const { response } = e
    const { status } = response as AxiosResponse<TResponse>
    if (response) {
      if (status === 401) {
        localStorage.clear()
      }
    }

    if (status === 400) {
      localStorage.clear()
    }

    throw e
  }

  request = <TData, TResponse = Object>(
    requestConfig: IRequest<TData>,
  ): Promise<AxiosResponse<TResponse>> => {
    return this.instance
      .request({
        ...requestConfig,
        baseURL: [
          requestConfig.prefixURL || defaultConfig.prefixURL,
          requestConfig.baseURL || defaultConfig.baseURL,
        ].join(''),
      })
      .then((resp) => resp)
      .catch((e: AxiosError<TResponse>) => this.handlerCatch<TResponse>(e))
  }

  requestToReceive = <TData, TResponse = Object>(
    requestConfig: Omit<IRequest<TData>, 'baseURL'>,
  ): Promise<AxiosResponse<TResponse>> =>
    this.request({
      ...requestConfig,
      baseURL: API_HOSTS,
    })
}

export default Fetcher
