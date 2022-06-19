import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'
import { API_HOSTS, HTTP_METHODS } from '../helper/api'

interface IRequest<TData = undefined> extends Omit<AxiosRequestConfig, 'data'> {
  prefixURL?: string
  data?: TData
}

const defaultConfig: IRequest = {
  prefixURL: '/',
  baseURL: 'https://core-area-api.herokuapp.com',
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
      const token = localStorage.getItem('token')

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
        // TODO: redirect to login
        // cleanUpPrivateStorage()
      }
      if (status === 403 || status === 500) {
        // handleErrorPages(status)
      }
    }

    if (status !== 404 && status !== 500) {
      // store.dispatch(
      //   addSnackbar({
      //     message: (data as any)?.errorMessage,
      //   }),
      // )
    }

    throw e
  }

  request = <TData, TResponse = unknown>(
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
  }

  requestAuth = <TData, TResponse = unknown>(
    requestConfig: Omit<IRequest<TData>, 'baseURL'>,
  ): Promise<AxiosResponse<TResponse>> =>
    this.request({
      ...requestConfig,
      baseURL: API_HOSTS.AUTH,
    })

  requestUsersInfo = <TData, TResponse = unknown>(
    requestConfig: Omit<IRequest<TData>, 'baseURL'>,
  ): Promise<AxiosResponse<TResponse>> =>
    this.request({
      ...requestConfig,
      baseURL: API_HOSTS.USERS,
    })

  requestDelete = <TData, TResponse = unknown>(
    requestConfig: Omit<IRequest<TData>, 'baseURL'>,
  ): Promise<AxiosResponse<TResponse>> =>
    this.request({
      ...requestConfig,
      baseURL: API_HOSTS.USERS_ID,
    })
}

export default Fetcher
