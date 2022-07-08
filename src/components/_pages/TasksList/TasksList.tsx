import React from 'react'
import { EmailMask, StringCompression } from 'src/components/_templates'

export const TasksList = () => {
  return (
    <>
      <div className="home-page">Tasks list</div>
      <EmailMask />
      <StringCompression />
    </>
  )
}
