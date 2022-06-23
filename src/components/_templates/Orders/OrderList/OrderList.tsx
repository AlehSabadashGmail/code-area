import { List, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { CONSTANTS_TEXT, SELECT_OPTIONS } from 'src/constants'
import apiClient from 'src/helper/api'
import { useAppSelector } from 'src/redux/hooks'
import { IOrder } from 'src/redux/types/orderType'
import { getOrders } from 'src/redux/types/selectors'
import { Title } from 'src/typography'
import { AddOrders } from '../AddOrders'
import { OrdersDetails } from '../OrdersDetails'
import './OrderList.scss'

export const OrderList = () => {
  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>()
  const [currenValue, setCurrenrValue] = useState(['in storage'])
  const [currentOrder, setCurrentOrder] = useState<IOrder>()

  const { orders } = useAppSelector(getOrders)

  useEffect(() => {
    apiClient()
      .get(
        `orders?${
          currenValue.length
            ? currenValue.map((value) => `status=${value}`).join('&')
            : ''
        }`,
      )
      .then((response) => {
        setFilteredOrders(response.data)
      })
  }, [currenValue, orders])

  const handleChange = (value: string[]) => {
    setCurrenrValue(value)
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
          value={currenValue}
          placeholder="select statuses"
          onChange={handleChange}
          optionLabelProp="label"
          options={SELECT_OPTIONS}
        />
        <Title level={3}>{CONSTANTS_TEXT.ORDERS_LIST}</Title>
        <List
          itemLayout="horizontal"
          dataSource={filteredOrders}
          renderItem={(item) => (
            <List.Item onClick={orderClickHandler(item)}>
              <List.Item.Meta title={item.product_name} />
            </List.Item>
          )}
        />
        <div>
          <AddOrders />
        </div>
      </div>
      <OrdersDetails order={currentOrder} />
    </div>
  )
}
