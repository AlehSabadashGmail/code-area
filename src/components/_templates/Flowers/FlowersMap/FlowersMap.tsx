import React from 'react'
import { Map } from 'src/components/_organisms'
import { FlowersMapCard } from '../FlowersMapCard'
import './FlowersMap.scss'

export const FlowersMap = () => {
  return (
    <>
      <FlowersMapCard />
      <Map />
    </>
  )
}
