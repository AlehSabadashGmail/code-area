import { IOrdersState } from './orderType'

export const getOrders = (state: { orders: IOrdersState }) => state.orders
