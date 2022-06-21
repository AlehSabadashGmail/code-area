import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { List } from 'src/components/_organisms'
import './style.scss'
import { loadUsersAsync } from 'src/redux/users/usersThunk'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state) => state.user)

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        User List: {users.length}
      </Typography>
      <List data={users} className={'user-list'} />
    </div>
  )
}
