import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextLink } from "./TextLink";

export default {
  title: "ui/TextLink",
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

export const Default: ComponentStoryObj<typeof TextLink> = {
  args: {
    href: "/",
    children: "TOP",
  },
};
