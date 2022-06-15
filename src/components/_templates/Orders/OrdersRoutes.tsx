import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import { getOrders } from '../../../redux/orders/selectors'
import { routes } from '../../../router/Config/config.routes'
import { Order } from '../../_pages/Order'
import { OrdersItems } from './OrdersItems'

export const OrdersRoutes = () => {
  const { orders } = useAppSelector(getOrders)
  return (
    <>
      <Routes>
        <Route path={routes.ordersList} element={<Order orders={orders} />} />
        <Route
          path={routes.ordersById}
          element={<OrdersItems orders={orders} />}
        />
      </Routes>
    </>
  )
}
