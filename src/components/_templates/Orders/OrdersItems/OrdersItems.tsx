import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IOrdersState } from '../../../../redux/orders/type'
import { OrderList } from '../OrderList'
import { Typography } from 'antd'
import './OrdersItems.scss'
import { CONSTANTS_TEXT } from '../constants'

export const OrdersItems = ({ orders }: IOrdersState) => {
  const { id } = useParams()

  const { Title } = Typography

  const order = orders.find((p) => p.id == id)

  return (
    <div className="wrapper">
      <OrderList orders={orders} />
      <div className="details_wrapper">
        <Title level={3}>{CONSTANTS_TEXT.TITLE_DETAILS}</Title>
        {order && <div>{order.product_name}</div>}
      </div>
    </div>
  )
}
