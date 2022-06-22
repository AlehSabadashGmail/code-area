import { IOrdersState } from './type'

export const getOrders = (state: { orders: IOrdersState }) => state.orders
