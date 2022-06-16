import React from 'react'
import { OrderList } from 'src/components/_templates/Orders'
import { IOrdersState } from 'src/redux/orders/type'

export const Order = ({ orders }: IOrdersState) => {
  return (
    <>
      <OrderList orders={orders} />
    </>
  )
}
