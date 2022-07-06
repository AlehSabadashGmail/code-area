import { AppThunk } from '../store'
import { requestEmployeesInfo as requestEmployeesInfoAPI } from 'src/constants/Api/Employees/employeesApi'
import {
  employeesLoading,
  employeesLoadSuccess,
  employeesFinishLoading,
  error,
} from '../reducers/employeesSlice'

export const requestEmployeesInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(employeesLoading())
    const response = await requestEmployeesInfoAPI()
    dispatch(employeesLoadSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(employeesFinishLoading())
  }
}
