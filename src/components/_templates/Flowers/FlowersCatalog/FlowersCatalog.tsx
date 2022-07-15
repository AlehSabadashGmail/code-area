import {
  DatePicker,
  Form,
  Input,
  Modal,
  notification,
  Select,
  Typography,
} from 'antd'
import React, { useState } from 'react'
import Slider from 'react-slick'
import flowers from 'src/data/flowers.json'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './FlowersCatalog.scss'
import { Card } from 'src/components/_atoms'
import 'react-tabs/style/react-tabs.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { FlowersData } from 'src/constants/Api/Flowers/flowers'
import {
  useCardNumber,
  useCVCNumber,
  usePhoneNumber,
  useRequire,
} from 'src/rules'
import { SETTING } from 'src/helper/helper'

export const FlowersCatalog = () => {
  const [visible, setVisible] = useState(false)
  const { Option, OptGroup } = Select
  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
    form.resetFields()
  }

  const onFinish = (values: FlowersData) => {
    notification.open({
      message: `Your question has been sent: id: ${Math.random()
        .toString(36)
        .slice(2)}
        flower: ${values.flowers}
        your name: ${values.user_name}
        your email: ${values.user_email}
        your phone: ${values.user_phone}
        your card number: ${values.card_number}
        your card data: ${values.card_data}
        your card cvc: ${values.card_cvc}       
        recipient name: ${values.recipient_name}
        recipient email: ${values.recipient_email}
        recipient phone: ${values.recipient_phone}`,
    })
    setVisible(false)
    form.resetFields()
  }

  return (
    <div>
      <Typography.Title id="catalog" level={1} className="catalog_title">
        Catalog
      </Typography.Title>
      <Tabs>
        <TabList className="cards_tabs">
          <Tab>Popular</Tab>
          <Tab>Monobooks</Tab>
          <Tab>Combined</Tab>
          <Tab>Compositions</Tab>
          <Tab>Wedding</Tab>
        </TabList>
        <TabPanel className="cards_slider">
          <Slider {...SETTING}>
            {flowers.popular.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
                onClick={showModal}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...SETTING}>
            {flowers.monobooks.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
                onClick={showModal}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...SETTING}>
            {flowers.combined.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
                onClick={showModal}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...SETTING}>
            {flowers.compositions.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
                onClick={showModal}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...SETTING}>
            {flowers.wedding.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
                onClick={showModal}
              />
            ))}
          </Slider>
        </TabPanel>
      </Tabs>
      <Modal
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        title="Order"
      >
        <Form name="complex-form" form={form} onFinish={onFinish}>
          <Form.Item label="Flowers" name="flowers">
            <Select placeholder="Choose a flower">
              <OptGroup label="Combined">
                {flowers.combined.map((flower) => (
                  <Option key={flower.id} value={flower.name}>
                    {flower.name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Wedding">
                {flowers.wedding.map((flower) => (
                  <Option key={flower.id} value={flower.name}>
                    {flower.name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Monobooks">
                {flowers.monobooks.map((flower) => (
                  <Option key={flower.id} value={flower.name}>
                    {flower.name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Compositions">
                {flowers.compositions.map((flower) => (
                  <Option key={flower.id} value={flower.name}>
                    {flower.name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Popular">
                {flowers.popular.map((flower) => (
                  <Option key={flower.id} value={flower.name}>
                    {flower.name}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Form.Item>
          <div>Your details</div>
          <Form.Item label="Full Name" name="user_name" rules={[useRequire]}>
            <Input
              autoComplete="new-password"
              placeholder="Please input your full name"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="user_email"
            rules={[
              useRequire,
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input your email"
            />
          </Form.Item>
          <Form.Item label="Phone" name="user_phone" rules={[usePhoneNumber]}>
            <Input
              addonBefore="+375"
              autoComplete="new-password"
              placeholder="(XX) XXX-XXXX"
            />
          </Form.Item>
          <div>Payment</div>
          <Form.Item
            label="Card number"
            name="card_number"
            rules={[useCardNumber]}
          >
            <Input
              autoComplete="new-password"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </Form.Item>
          <Form.Item label="Card data" name="card_data" rules={[useRequire]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Card cvc" name="card_cvc" rules={[useCVCNumber]}>
            <Input autoComplete="new-password" placeholder="XXX" />
          </Form.Item>
          <div>Recipient's details</div>
          <Form.Item
            label="Full Name"
            name="recipient_full_name"
            rules={[useRequire]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input your full name"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="recipient_email"
            rules={[
              useRequire,
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input
              autoComplete="new-password"
              placeholder="Please input your email"
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="recipient_phone"
            rules={[usePhoneNumber]}
          >
            <Input
              addonBefore="+375"
              autoComplete="new-password"
              placeholder="Please input your phone"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
