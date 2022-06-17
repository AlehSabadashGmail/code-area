import React, { useEffect } from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { List } from '../../_organisms'
import { getUserInfo } from '../../../redux/users/selecor'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { requestUserInfo } from '../../../redux/users/action'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(requestUserInfo())
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
