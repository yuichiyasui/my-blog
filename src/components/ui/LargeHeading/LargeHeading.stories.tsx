import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { LargeHeading } from "./LargeHeading";

export default {
  title: "ui/LargeHeading",
  component: LargeHeading,
} as ComponentMeta<typeof LargeHeading>;

export const Default: ComponentStoryObj<typeof LargeHeading> = {
  args: { children: "大見出し" },
};
