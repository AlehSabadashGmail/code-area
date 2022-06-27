import React from 'react'
import { CONSTANTS_TEXT } from 'src/constants'
import { IOrder } from 'src/redux'
import { Title } from 'src/typography'
import './OrdersItems.scss'

interface IProps {
  order?: IOrder
}

export const OrdersDetails = ({ order }: IProps) => {
  return (
    <div className="details_wrapper">
      <Title level={3}>{CONSTANTS_TEXT.TITLE_DETAILS}</Title>
      {order && <div>{order.product_name}</div>}
    </div>
  )
}
