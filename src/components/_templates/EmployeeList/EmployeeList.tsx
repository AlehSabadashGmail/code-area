import React, { useEffect } from 'react'
import { requestEmployeesInfo } from 'src/redux/employees/actions'
import { getEmployeesInfo } from 'src/redux/employees/selectors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

export const EmployeeList = () => {
  const dispatch = useAppDispatch()
  const { employees } = useAppSelector(getEmployeesInfo)

  useEffect(() => {
    dispatch(requestEmployeesInfo())
  }, [])

  return <div />
}
