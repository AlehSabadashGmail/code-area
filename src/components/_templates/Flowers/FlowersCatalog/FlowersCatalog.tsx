import { Form, notification, Typography } from 'antd'
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
import { SETTING } from 'src/helper/helper'
import { Modal } from 'src/components/_organisms'

export const FlowersCatalog = () => {
  const [visible, setVisible] = useState(false)
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
          <Slider {...SETTING} className="slider">
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
          <Slider {...SETTING} className="slider">
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
          <Slider {...SETTING} className="slider">
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
          <Slider {...SETTING} className="slider">
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
          <Slider {...SETTING} className="slider">
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
        submit={form.submit}
        handleCancel={handleCancel}
        form={form}
        onFinish={onFinish}
      />
    </div>
  )
}
