import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'ui/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStoryObj<typeof Logo> = {};
