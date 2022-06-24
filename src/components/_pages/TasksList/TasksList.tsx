import React, { useState } from 'react'
import { EmailMask } from 'src/components/_templates'

export const TasksList = () => {
  return (
    <>
      <div className="home-page">Tasks list</div>
      <EmailMask />
    </>
  )
}
