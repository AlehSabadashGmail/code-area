import React from 'react'
import { CardType } from './Card.d'
import './style.scss'
import { Button } from 'antd'
import { Card as FlowerCard } from 'antd'

export const Card = ({ image, title, price, onClick }: CardType) => (
  <FlowerCard cover={<img alt="flowers" src={image} />}>
    <div>Bouquet: "{title}"</div>
    <div>{price}$</div>
    <Button className="button" onClick={onClick}>
      Order
    </Button>
  </FlowerCard>
)
