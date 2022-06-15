import { Button, Form, Input, InputNumber } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import apiClient from '../../../../helper/api'
import { useAppDispatch } from '../../../../redux/hooks'
import { loadOrdersAsync } from '../../../../redux/orders/orderThunk'
import { IOrder } from '../../../../redux/orders/type'
import { Modal } from '../../../_atoms/Modal'
import { currentUser, initialOrderData, OrderData } from '../../constants'
import './AddOrders.scss'
import { CONSTANTS_TEXT } from '../constants'
import { orderFormRules } from './rules'

export const AddOrders = () => {
  const dispatch = useAppDispatch()

  const [isModalOpen, setModalState] = useState(false)
  const [ordersValues, setOrdersValues] = useState<IOrder | null>(null)

  const [form] = Form.useForm()

  const toggleModal = () => setModalState(!isModalOpen)
  const onClose = () => setModalState(false)

  const createOrders = () => {
    apiClient()
      .post('orders', ordersValues)
      .then(() => {
        dispatch(loadOrdersAsync())
      })
  }

  const onFinish = (values: OrderData) => {
    if (ordersValues) {
      createOrders()
    }
    setOrdersValues(initialOrderData(values))
  }

  const getCurrenLocation = () => {
    form.setFieldsValue({
      location: {
        latitude: currentUser.latitude,
        longitude: currentUser.longitude,
      },
    })
  }

  const { rule } = orderFormRules()

  return (
    <div>
      <Button onClick={toggleModal}>{CONSTANTS_TEXT.CREATE_ORDERS}</Button>
      <Modal
        title={CONSTANTS_TEXT.CREATE_ORDERS}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item label="Product name" name="product_name" rules={[rule]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input product name"
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input.Group compact>
              <Form.Item name="price_min" rules={[rule]}>
                <InputNumber placeholder="Min" />
              </Form.Item>
              <Form.Item name="price_max" rules={[rule]}>
                <InputNumber className="site-input-right" placeholder="Max" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[rule]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input address"
            />
          </Form.Item>
          <Button onClick={getCurrenLocation}>
            {CONSTANTS_TEXT.USE_CURRENT}
          </Button>
          <Form.Item
            label="Latitude"
            name={['location', 'latitude']}
            rules={[rule]}
          >
            <Input placeholder="Input latitude" />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name={['location', 'longitude']}
            rules={[rule]}
          >
            <Input placeholder="Input longitude" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea
              autoComplete="new-password"
              placeholder="Please input description"
              rows={4}
            />
          </Form.Item>
          <Form.Item colon={false}>
            <Button type="primary" htmlType="submit">
              {CONSTANTS_TEXT.BUTTON_SAVE}
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={onClose}>{CONSTANTS_TEXT.BUTTON_CANCEL}</Button>
      </Modal>
    </div>
  )
}
