import { ColumnsType } from 'antd/lib/table/interface'
import { getDateFormat } from '../../../helper/helper'
import { IUser } from '../../../redux/user/type'

export const columns: ColumnsType<IUser> = [
  {
    title: 'User name',
    dataIndex: 'user_name',
    key: 'user_name',
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
    sorter: (a, b: IUser) => a.created_at.localeCompare(b.created_at),
    render: (date: string) => getDateFormat(date),
  },
]
