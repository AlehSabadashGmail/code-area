import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { loadUsersAsync } from '../../../redux/users/usersThunk'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { List } from '../../_organisms'
import { getUserInfo } from '../../../redux/users/selecor'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        User List: {users.length}
      </Typography>
      <List children={users} className={'user-list'} />
    </div>
  )
}
