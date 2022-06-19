import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { List } from '../../_organisms'
import { ModalFilter } from '../../_molecules'
import { getFilteredUsers, getUserInfo } from '../../../redux/users/selectors'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { requestUserInfo } from '../../../redux/users/action'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)
  const filterdUsers = useAppSelector(getFilteredUsers)

  useEffect(() => {
    dispatch(requestUserInfo())
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
