import { SearchOutlined } from '@ant-design/icons'

import { ColumnsType } from 'antd/lib/table/interface'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { getDateFormat } from '../../../helper/helper'
import { IUser } from '../../../redux/users/type'
import { ButtonDeleteUser } from '../ButtonDeleteUser'
import { deleteUser } from './api'
import { useAppDispatch } from '../../../redux/hooks'

export const Columns = () => {
  const dispatch = useAppDispatch()

  const token = JSON.parse(localStorage.getItem('token') || '')

  const deleteUser = (id: string) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }

    fetch(
      `https://core-area-api.herokuapp.com/users/${id}`,
      requestOptions,
    ).then(() => {
      dispatch(loadUsersAsync())
    })
  }

  const columns: ColumnsType<IUser> = [
    {
      title: 'User name',
      dataIndex: 'user_name',
      key: 'user_name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search username"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm()
              }}
              onBlur={() => {
                confirm()
              }}
            />
          </>
        )
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record: IUser) => {
        return record.user_name
          .toLowerCase()
          .includes(value.toString().toLowerCase())
      },
    },
    {
      title: 'Full name',
      children: [
        {
          title: 'First Name',
          dataIndex: 'first_name',
          key: 'first_name',
          sorter: (a, b: IUser) => a.first_name.localeCompare(b.first_name),
        },
        {
          title: 'Last Name',
          dataIndex: 'last_name',
          key: 'last_name',
          sorter: (a, b: IUser) => a.last_name.localeCompare(b.last_name),
        },
      ],
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b: IUser) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
      defaultSortOrder: 'descend',
      sorter: (a, b: IUser) => a.created_at?.localeCompare(b.created_at),
      render: (date: string) => getDateFormat(date),
    },
    {
      title: 'Delete Users',
      dataIndex: 'delete',
      render: (text, record, index) => (
        <ButtonDeleteUser
          onConfirm={(e) => {
            deleteUser(record.id)
          }}
        />
      ),
    },
  ]

  return columns
}
