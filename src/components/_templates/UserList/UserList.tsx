import React, { useEffect } from 'react'
import { Typography } from 'antd'
import './style.scss'
import { USER_LIST } from 'src/constants'
import { requestUserInfo } from 'src/redux/users/action'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getUserInfo } from 'src/redux/users/selecor'
import { List } from 'src/components/_organisms'

export const UserList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(getUserInfo)

  useEffect(() => {
    dispatch(requestUserInfo())
  }, [])

  return (
    <div>
      <Typography className="header-list-user">
        {USER_LIST} {users?.length}
      </Typography>
      <List data={users} className={'user-list'} />
    </div>
  )
}
