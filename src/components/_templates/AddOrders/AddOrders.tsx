import { Button, Form, Input, InputNumber, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import api from '../../../helper/api'
import { IOrder } from '../../../redux/orders/type'
import { currentUser, initialOrderData, OrderData } from '../constants'
import { CONSTANTS_TEXT } from './constants'
import { useRequire } from '../../../rules/rules'

export const AddOrders = () => {
  const [visible, setVisible] = useState(false)
  const [ordersValues, setOrdersValues] = useState<IOrder | null>(null)

  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const createOrders = () => {
    api()
      .post('orders', ordersValues)
      .then((response) => console.log(response.data))
  }

  const onFinish = (values: OrderData) => {
    setOrdersValues(initialOrderData(values))
    if (ordersValues) {
      createOrders()
    }
    setVisible(false)
    form.resetFields()
  }

  const getCurrenLocation = () => {
    form.setFieldsValue({
      location: {
        latitude: currentUser.latitude,
        longitude: currentUser.longitude,
      },
    })
  }

  const require = useRequire()

  return (
    <div>
      <Button onClick={showModal}>{CONSTANTS_TEXT.CREATE_ORDERS}</Button>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title={CONSTANTS_TEXT.CREATE_ORDERS}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Product name" name="product_name" rules={[require]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input product name"
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input.Group compact>
              <Form.Item name="price_min" rules={[require]}>
                <InputNumber placeholder="Min" />
              </Form.Item>
              <Form.Item name="price_max" rules={[require]}>
                <InputNumber className="site-input-right" placeholder="Max" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[require]}>
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
            rules={[require]}
          >
            <Input placeholder="Input latitude" />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name={['location', 'longitude']}
            rules={[require]}
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
        </Form>
      </Modal>
    </div>
  )
}
