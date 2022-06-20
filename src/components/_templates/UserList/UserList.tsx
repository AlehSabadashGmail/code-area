import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { requestUserInfo } from '../../../redux/users/action'
import { List } from '../../_organisms'
import { USER_LIST } from '../../../constants'
import './style.scss'
import { getFilteredUsers, getUserInfo } from '../../../redux/users/selectors'
import { ModalFilter } from '../../_molecules'

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
        {USER_LIST} {filterdUsers.length}
        <ModalFilter data={users} />
      </Typography>
      <List data={filterdUsers} className={'user-list'} />
    </div>
  )
}
