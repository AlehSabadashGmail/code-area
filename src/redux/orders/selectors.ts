import { IOrdersState } from '../types/orderType'

export const getOrders = (state: { orders: IOrdersState }) => state.orders
