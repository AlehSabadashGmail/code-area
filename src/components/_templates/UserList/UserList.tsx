import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { loadUsersAsync } from '../../../redux/users/usersThunk'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { List } from '../../_organisms'

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
