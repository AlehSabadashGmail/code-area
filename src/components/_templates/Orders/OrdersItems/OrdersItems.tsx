import { Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import { IOrdersState } from 'src/redux/orders/type'
import { CONSTANTS_TEXT } from 'src/Text'
import { OrderList } from '../OrderList'
import './OrdersItems.scss'

const { Title } = Typography

export const OrdersItems = ({ orders }: IOrdersState) => {
  const { id } = useParams()

  const order = orders.find((order) => order.id == id)

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
