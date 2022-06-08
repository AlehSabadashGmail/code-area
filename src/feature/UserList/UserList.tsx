import {
  ColumnType,
  FilterConfirmProps,
  SorterResult,
} from 'antd/lib/table/interface'
import React, { Dispatch, useEffect, useRef, useState } from 'react'
import { Button, Input, InputRef, Space, Table, Typography } from 'antd'
import type { TablePaginationConfig } from 'antd/lib/table'
import { SearchOutlined } from '@ant-design/icons'
import ColumnGroup from 'antd/lib/table/ColumnGroup'
import Highlighter from 'react-highlight-words'
import Column from 'antd/lib/table/Column'
import moment from 'moment'

import { IUser, IUserState } from '../../store/user/type'
import '../UserList/styles.scss'
import { loadUsersAsync } from '../../store/user/usersThunk'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { clearUsers, setUsers } from '../../store/user/userSlice'
import { AddUser } from './AddUsers'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const [value, setValue] = useState('')

  const FilterByNameInput = (
    <Input
      placeholder="Search user name"
      value={value}
      onChange={(e) => {
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
      }}
    />
  )

  const sortColumnIn = (column_field: IUser) => {
    if (typeof column_field === 'string') {
      return (a: IUser, b: IUser) => a.first_name.localeCompare(b.first_name)
    } else {
      return (a: IUser, b: IUser) => a.age - b.age
    }
  }

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  return (
    <div>
      <AddUser />
      <Typography className="header-list-user">
        User List: {user.length}
      </Typography>
      <div className="user-list">
        <Table dataSource={user} size="middle" bordered>
          <ColumnGroup title="User name">
            <Column
              title={FilterByNameInput}
              dataIndex="user_name"
              key="user_name"
            />
          </ColumnGroup>
          <ColumnGroup title="Full name">
            <Column
              title="First Name"
              dataIndex="first_name"
              key="first_name"
              sorter={(a, b: IUser) => a.first_name.localeCompare(b.first_name)}
            />
            <Column
              title="Last Name"
              dataIndex="last_name"
              key="last_name"
              sorter={(a, b: IUser) => a.last_name.localeCompare(b.last_name)}
            />
          </ColumnGroup>
          <Column title="Role" dataIndex="role" key="role" />
          <Column
            title="Age"
            dataIndex="age"
            key="age"
            sorter={(a, b: IUser) => a.age - b.age}
          />
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Created at"
            dataIndex="created_at"
            key="created_at"
            sorter={(a, b: IUser) => a.created_at.localeCompare(b.created_at)}
            render={(created_at) =>
              `${moment(created_at).format('DD-MM-YYYY')}`
            }
          />
        </Table>
      </div>
      {/* <div>{users}</div> */}
    </div>
  )
}
