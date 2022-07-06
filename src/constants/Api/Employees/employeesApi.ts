import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'
import { EmployeesData, EmployeesInfoResponse } from './api'

const fetcher = new Fetcher()

export const requestEmployeesInfo = () =>
  fetcher.requestToReceive<EmployeesData, EmployeesInfoResponse>({
    url: 'employees',
    method: HTTP_METHODS.GET,
  })
