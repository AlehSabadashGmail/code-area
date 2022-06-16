import { Button, Form, Input, InputNumber } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import apiClient from 'src/helper/api'
import { useAppDispatch } from 'src/redux/hooks'
import { loadOrdersAsync } from 'src/redux/orders/orderThunk'
import { IOrder } from 'src/redux/orders/type'
import './AddOrders.scss'
import { CONSTANTS_TEXT } from '../constants'
import { AreaModal } from 'src/components/_atoms/Modal'
import { currentUser, initialOrderData, OrderData } from '../../constants'
import { useRules } from './rules'

export const AddOrders = () => {
  const dispatch = useAppDispatch()

  const [ordersValues, setOrdersValues] = useState<IOrder | null>(null)

  const [form] = Form.useForm()

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

  return (
    <div>
      <AreaModal buttonText="Create order" title="Create order">
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item
            label="Product name"
            name="product_name"
            rules={[useRules]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input product name"
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input.Group compact>
              <Form.Item name="price_min" rules={[useRules]}>
                <InputNumber placeholder="Min" />
              </Form.Item>
              <Form.Item name="price_max" rules={[useRules]}>
                <InputNumber className="site-input-right" placeholder="Max" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[useRules]}>
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
            rules={[useRules]}
          >
            <Input placeholder="Input latitude" />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name={['location', 'longitude']}
            rules={[useRules]}
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
        <Button type="primary" htmlType="submit">
          Cancel
        </Button>
      </AreaModal>
    </div>
  )
}
