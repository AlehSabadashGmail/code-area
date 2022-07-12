import { Typography } from 'antd'
import React from 'react'
import Slider from 'react-slick'
import flowers from 'src/data/flowers.json'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './FlowersCatalog.scss'
import { Card } from 'src/components/_atoms'
import 'react-tabs/style/react-tabs.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

export const FlowersCatalog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <Slider {...settings}>
            {flowers.popular.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...settings}>
            {flowers.monobooks.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...settings}>
            {flowers.combined.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...settings}>
            {flowers.compositions.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel className="cards_slider">
          <Slider {...settings}>
            {flowers.wedding.map((flower) => (
              <Card
                image={flower.img}
                title={flower.name}
                price={flower.price}
              />
            ))}
          </Slider>
        </TabPanel>
      </Tabs>
    </div>
  )
}
