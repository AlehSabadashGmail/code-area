import React from 'react'
import { IOrdersState } from '../../../redux/orders/type'
import { OrderList } from '../../_templates/Orders/OrderList'

export const Order = ({ orders }: IOrdersState) => {
  return (
    <>
      <OrderList orders={orders} />
    </>
  )
}
