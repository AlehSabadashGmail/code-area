import React, { useEffect, useState } from 'react'
import { Input, Typography } from 'antd'

import { IUser } from '../../../redux/user/type'
import '../UserList/styles.scss'
import { loadUsersAsync } from '../../../redux/user/usersThunk'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setUsers } from '../../../redux/reducers/userSlice'
import { List } from '../../_organisms'
import { InputDefault } from '../../_atoms'

export const FilterByNameInput = <Input placeholder="Search user name" />

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = e.target.value
    if (currValue === '') {
      setValue('')
      dispatch(setUsers(user))
    } else {
      setValue(currValue)
      const filteredData = user.filter((entry: IUser) =>
        entry.user_name.includes(currValue),
      )
      dispatch(setUsers(filteredData))
    }
  }

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        User List: {user.length}
      </Typography>
      <InputDefault value={value} onChange={(e) => onChange(e)} />
      <List children={user} className={'user-list'} />
    </div>
  )
}
