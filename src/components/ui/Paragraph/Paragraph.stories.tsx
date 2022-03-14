import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

export default {
  title: "ui/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

export const Default: ComponentStoryObj<typeof Paragraph> = {
  args: { children: "こんにちは。" },
};
