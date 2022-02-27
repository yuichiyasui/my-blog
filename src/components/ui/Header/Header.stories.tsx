import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'ui/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStoryObj<typeof Header> = {};
