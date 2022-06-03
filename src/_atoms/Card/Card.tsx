import React from 'react';
import cn from "classnames";
import { CardType } from './Card.d';
import './style.scss';

export const Card = ({ children, className }: CardType) => (
  <div className={cn('card-default', className)}>{children}</div>
);
