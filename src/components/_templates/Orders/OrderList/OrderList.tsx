import { List, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../../redux/hooks'
import { loadOrdersAsync } from '../../../../redux/orders/orderThunk'
import { IOrder, IOrdersState } from '../../../../redux/orders/type'
import { AddOrders } from '../AddOrders'
import { CONSTANTS_TEXT, OPTIONS } from '../constants'
import './OrderList.scss'

export const OrderList = ({ orders }: IOrdersState) => {
  const dispatch = useAppDispatch()

  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>()

  useEffect(() => {
    setFilteredOrders(orders)
  }, [orders])

  const { Title } = Typography

  useEffect(() => {
    dispatch(loadOrdersAsync())
  }, [])

  const handleChange = (value: []) => {
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
        style={{
          width: '100%',
        }}
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
