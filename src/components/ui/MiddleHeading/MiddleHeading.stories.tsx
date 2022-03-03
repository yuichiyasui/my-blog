import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MiddleHeading } from "./MiddleHeading";

export default {
  title: "ui/MiddleHeading",
  component: MiddleHeading,
} as ComponentMeta<typeof MiddleHeading>;

export const Default: ComponentStoryObj<typeof MiddleHeading> = {
  args: { children: "中見出し" },
};
