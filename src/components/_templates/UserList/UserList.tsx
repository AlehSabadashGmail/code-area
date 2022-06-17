import React from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { List } from '../../_organisms'

export const UserList: React.FC = () => {
  return (
    <div>
      <Typography className="header-list-user">User List: {0}</Typography>
      <List children={[]} className={'user-list'} />
    </div>
  )
}
