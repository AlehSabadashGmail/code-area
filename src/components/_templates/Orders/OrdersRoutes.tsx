import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Order } from 'src/components/_pages'
import { useAppSelector } from 'src/redux/hooks'
import { getOrders } from 'src/redux/orders/selectors'
import { routes } from 'src/router/Config/config.routes'
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
