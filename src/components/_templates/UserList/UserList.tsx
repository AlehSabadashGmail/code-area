import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { List } from '../../_organisms'
import { loadUsersAsync } from '../../../redux/users/usersThunk'
import { ModalFilter } from '../../_molecules'
import { getFilteredUsers, getUserInfo } from '../../../redux/users/selectors'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)
  const filterdUsers = useAppSelector(getFilteredUsers)

  useEffect(() => {
    dispatch(loadUsersAsync())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        User List: {filterdUsers.length}
        <ModalFilter children={users} />
      </Typography>
      <List children={filterdUsers} className={'user-list'} />
    </div>
  )
}
