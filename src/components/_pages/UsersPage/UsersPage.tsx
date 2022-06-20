import React from 'react'
import { AddUsers, UserList } from 'src/components/_templates'

export const UsersPage = () => {
  return (
    <div>
      <UserList />
      <AddUsers />
    </div>
  )
}
