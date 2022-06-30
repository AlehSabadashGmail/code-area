import React from 'react'
import { UserList, AddUsers } from 'src/components/_templates'
import { LayoutPage } from '../LayoutPage'

export const UsersPage = () => {
  return (
    <LayoutPage>
      <UserList />
      <AddUsers />
    </LayoutPage>
  )
}
