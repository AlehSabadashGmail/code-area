import { IEmployeesState } from '../types/employeesType'

export const getEmployeesInfo = (state: { employees: IEmployeesState }) =>
  state.employees
