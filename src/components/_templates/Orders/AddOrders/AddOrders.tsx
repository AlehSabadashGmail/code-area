import { Button, Form, Input, InputNumber, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import apiClient from 'src/helper/api'
import { useAppDispatch } from 'src/redux/hooks'
import { loadOrdersAsync } from 'src/redux/orders/orderThunk'
import { IOrder } from 'src/redux/orders/type'
import { CONSTANTS_TEXT } from '../constants'
import { currentUser, initialOrderData, OrderData } from '../../constants'
import { useRequire } from 'src/rules'

export const AddOrders = () => {
  const dispatch = useAppDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [ordersValues, setOrdersValues] = useState<IOrder | null>(null)

  const [form] = Form.useForm()

  const createOrders = () => {
    apiClient()
      .post('orders', ordersValues)
      .then(() => {
        dispatch(loadOrdersAsync())
      })
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  const onFinish = (values: OrderData) => {
    if (ordersValues) {
      createOrders()
    }
    setOrdersValues(initialOrderData(values))
    setIsModalVisible(false)
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
      <Button type="primary" onClick={showModal}>
        Create orders
      </Button>
      <Modal
        title="Create order"
        visible={isModalVisible}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
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
