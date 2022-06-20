import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getFilteredUsers } from 'src/redux/users/selectors'
import { requestUserInfo } from 'src/redux/users/action'
import { List } from 'src/components/_organisms'
import { USER_LIST } from 'src/constants'
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
