import React from "react";
import { Card as Component } from "./Card";
import { CardType } from "./Card.d";
import { Story } from "@storybook/react";

export default {
  title: 'Card',
  component: Component,
};

const Template: Story<CardType> = args => <Component {...args} />;

export const Card = Template.bind({});
Card.args = {
  children: 'Card example',
};
