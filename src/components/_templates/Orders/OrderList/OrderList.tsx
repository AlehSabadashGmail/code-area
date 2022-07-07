import { List, Select } from 'antd'
import Item from 'antd/lib/list/Item'
import React, { useEffect, useState } from 'react'
import { CONSTANTS_TEXT, SELECT_OPTIONS } from 'src/constants'
import { getStatusValue } from 'src/helper/helper'
import { IOrder } from 'src/redux'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestOrdersInfo } from 'src/redux/orders/actions'
import { getOrders } from 'src/redux/orders/selectors'
import { Title } from 'src/typography'
import { AddOrders } from '../AddOrders'
import { OrdersDetails } from '../OrdersDetails'
import './OrderList.scss'

export const OrderList = () => {
  const [currentStatus, setCurrentStatus] = useState('in storage')
  const [currentOrder, setCurrentOrder] = useState<IOrder>()

  const dispatch = useAppDispatch()

  const { orders } = useAppSelector(getOrders)

  useEffect(() => {
    dispatch(requestOrdersInfo({ status: getStatusValue(currentStatus) }))
  }, [currentStatus])

  const handleChange = (value: string) => {
    setCurrentStatus(value)
  }

  const orderClickHandler = (order: IOrder) => () => {
    setCurrentOrder(order)
  }

  return (
    <div className="wrapper">
      <div className="list_wrapper">
        <Select
          mode="multiple"
          className="select"
          value={currentStatus}
          placeholder="select statuses"
          onChange={handleChange}
          optionLabelProp="label"
          options={SELECT_OPTIONS}
        />
        <Title level={3}>{CONSTANTS_TEXT.ORDERS_LIST}</Title>
        <List
          itemLayout="horizontal"
          rowKey={(item) => item.id}
          dataSource={orders}
          renderItem={(item) => (
            <List.Item onClick={orderClickHandler(item)}>
              <List.Item.Meta title={item.product_name} />
            </List.Item>
          )}
        />
        <AddOrders currentStatus={currentStatus} />
      </div>
      {currentOrder && <OrdersDetails order={currentOrder} />}
    </div>
  )
}
