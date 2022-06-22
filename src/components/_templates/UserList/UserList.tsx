import React, { useEffect } from 'react'
import { Typography } from 'antd'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestUserInfo } from 'src/redux/users/action'
import { List } from 'src/components/_organisms'
import { USER_LIST } from 'src/constants'
import { getUserInfo } from 'src/redux/users/selecor'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)

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
