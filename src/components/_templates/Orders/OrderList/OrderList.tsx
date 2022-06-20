import { List, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiClient from 'src/helper/api'
import { useAppDispatch } from 'src/redux/hooks'
import { loadOrdersAsync } from 'src/redux/orders/orderThunk'
import { IOrder, IOrdersState } from 'src/redux/orders/type'
import { CONSTANTS_TEXT, OPTIONS } from 'src/Text'
import { AddOrders } from '../AddOrders'
import './OrderList.scss'

const { Title } = Typography

export const OrderList = ({ orders }: IOrdersState) => {
  const dispatch = useAppDispatch()

  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>()

  useEffect(() => {
    dispatch(loadOrdersAsync())
  }, [])

  useEffect(() => {
    apiClient()
      .get('orders?status=in+storage')
      .then((response) => {
        setFilteredOrders(response.data)
      })
  }, [orders])

  const handleChange = (value: string[]) => {
    setFilteredOrders(
      value.length
        ? orders.filter((order: IOrder) =>
            value.some((v) =>
              order.status ? order.status.indexOf(v) >= 0 : false,
            ),
          )
        : orders,
    )
  }

  return (
    <div className="list_wrapper">
      <Select
        mode="multiple"
        className="select"
        defaultValue={['in storage']}
        placeholder="select statuses"
        onChange={handleChange}
        optionLabelProp="label"
        options={OPTIONS}
      />
      <Title level={3}>{CONSTANTS_TEXT.ORDERS_LIST}</Title>
      <List
        itemLayout="horizontal"
        dataSource={filteredOrders}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/orders/${item.id}`}>{item.product_name}</Link>}
            />
          </List.Item>
        )}
      />
      <div>
        <AddOrders />
      </div>
    </div>
  )
}
