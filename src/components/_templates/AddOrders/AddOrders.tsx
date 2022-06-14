import { Button, Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import api from '../../../helper/api'
import { IOrder } from '../../../redux/orders/type'
import { Modal } from '../../_atoms/Modal'
import { initialOrderData, OrderData } from '../constants'
import './AddOrders.scss'
import { CONSTANTS_TEXT } from './constants'
import { orderFormRules } from './rules'

export const AddOrders = () => {
  const [isModalOpen, setModalState] = useState(false)
  const [ordersValues, setOrdersValues] = useState<IOrder | null>(null)

  const toggleModal = () => setModalState(!isModalOpen)
  const onClose = () => setModalState(false)

  const createOrders = () => {
    api().post('orders', ordersValues)
  }

  const onFinish = (values: OrderData) => {
    setOrdersValues(initialOrderData(values))
    if (ordersValues) {
      createOrders()
    }
    setModalState(false)
  }

  const {
    productNameRules,
    priceRules,
    addressRules,
    latitudeRules,
    longitudeRules,
  } = orderFormRules()

  return (
    <div>
      <Button onClick={toggleModal}>{CONSTANTS_TEXT.CREATE_ORDERS}</Button>
      <Modal
        title={CONSTANTS_TEXT.CREATE_ORDERS}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Form name="complex-form" onFinish={onFinish}>
          <Form.Item
            label="Product name"
            name="product_name"
            rules={[productNameRules]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input product name"
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input.Group compact>
              <Form.Item name="price_min" rules={[priceRules]}>
                <Input placeholder="Min" />
              </Form.Item>
              <Form.Item name="price_max" rules={[priceRules]}>
                <Input className="site-input-right" placeholder="Max" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[addressRules]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input address"
            />
          </Form.Item>
          <Button>{CONSTANTS_TEXT.USE_CURRENT}</Button>
          <Form.Item
            label="Latitude"
            name={['location', 'latitude']}
            rules={[latitudeRules]}
          >
            <Input placeholder="Input latitude" />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name={['location', 'longitude']}
            rules={[longitudeRules]}
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
