import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { getFilteredUsers, getUserInfo } from 'src/redux/users/selectors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/action'
import { ModalFilter } from 'src/components/_molecules'
import { List } from 'src/components/_organisms'
import { USER_LIST } from 'src/constants'
import './style.scss'

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
