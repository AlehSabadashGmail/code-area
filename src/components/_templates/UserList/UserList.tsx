import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { requestUserInfo } from '../../../redux/users/action'
import { getUserInfo } from '../../../redux/users/selecor'
import { List } from '../../_organisms'
import './style.scss'
import { USER_LIST } from '../../../constants'

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
        {USER_LIST} {users.length}
      </Typography>
      <List data={users} className={'user-list'} />
    </div>
  )
}
