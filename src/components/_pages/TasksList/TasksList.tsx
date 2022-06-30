import React from 'react'
import { EmailMask, StringCompression } from 'src/components/_templates'
import { LayoutPage } from '../LayoutPage'

export const TasksList = () => {
  return (
    <LayoutPage>
      <div className="home-page">Tasks list</div>
      <EmailMask />
      <StringCompression />
    </LayoutPage>
  )
}
