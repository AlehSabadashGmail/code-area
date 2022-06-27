import { List, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { CONSTANTS_TEXT, SELECT_OPTIONS } from 'src/constants'
import { IOrder } from 'src/redux'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestOrdersInfo } from 'src/redux/orders/actions'
import { getOrders } from 'src/redux/orders/selectors'
import { Title } from 'src/typography'
import { AddOrders } from '../AddOrders'
import { OrdersDetails } from '../OrdersDetails'
import './OrderList.scss'

export const OrderList = () => {
  const [currentStatus, setCurrentStatus] = useState(['in storage'])
  const [currentOrder, setCurrentOrder] = useState<IOrder>()

  const dispatch = useAppDispatch()

  const { orders } = useAppSelector(getOrders)

  useEffect(() => {
    dispatch(requestOrdersInfo({ status: currentStatus }))
  }, [currentStatus])

  const handleChange = (value: string[]) => {
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
          dataSource={orders}
          renderItem={(item) => (
            <List.Item onClick={orderClickHandler(item)}>
              <List.Item.Meta title={item.product_name} />
            </List.Item>
          )}
        />
        <div>
          <AddOrders currentStatus={currentStatus} />
        </div>
      </div>
      <OrdersDetails order={currentOrder} />
    </div>
  )
}
