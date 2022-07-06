import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEmployees, IEmployeesState } from '../types/employeesType'

const initialState: IEmployeesState = {
  employees: [],
  isLoading: false,
  isLoaded: false,
  error: null,
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    employeesLoading(state: IEmployeesState) {
      state.isLoading = true
      state.error = null
    },
    employeesLoadSuccess(
      state: IEmployeesState,
      action: PayloadAction<IEmployees[]>,
    ) {
      state.isLoading = false
      state.error = ''
      state.employees = action.payload
    },
    employeesFinishLoading(state: IEmployeesState) {
      state.isLoading = false
    },
    error(
      state: IEmployeesState,
      action: PayloadAction<{ error: IEmployeesState['error'] }>,
    ) {
      const { error } = action.payload
      state.error = error
    },
  },
})

export default employeesSlice.reducer
export const {
  employeesLoading,
  employeesLoadSuccess,
  employeesFinishLoading,
  error,
} = employeesSlice.actions
