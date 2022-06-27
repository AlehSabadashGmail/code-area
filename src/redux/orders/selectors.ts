import { IOrdersState } from '../types'

export const getOrders = (state: { orders: IOrdersState }) => state.orders
