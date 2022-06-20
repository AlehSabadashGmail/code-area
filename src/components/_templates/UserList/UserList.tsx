import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getFilteredUsers } from '../../../redux/users/selectors'
import { requestUserInfo } from '../../../redux/users/action'
import { List } from '../../_organisms'
import { USER_LIST } from '../../../constants'
import './style.scss'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const filterdUsers = useAppSelector(getFilteredUsers)

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        {USER_LIST} {filterdUsers.length}
      </Typography>
      <List data={filterdUsers} className={'user-list'} />
    </div>
  )
}
