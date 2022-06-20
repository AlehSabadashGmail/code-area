import React from 'react'
import { Typography } from 'antd'

import '../UserList/styles.scss'
import { List } from '../../_organisms'
import { USER_LIST } from '../../../constants'

export const UserList: React.FC = () => {
  return (
    <div>
      <Typography className="header-list-user">
        {USER_LIST} {0}
      </Typography>
      <List data={[]} className={'user-list'} />
    </div>
  )
}
