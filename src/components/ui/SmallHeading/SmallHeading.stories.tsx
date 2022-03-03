import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { SmallHeading } from "./SmallHeading";

export default {
  title: "ui/SmallHeading",
  component: SmallHeading,
} as ComponentMeta<typeof SmallHeading>;

export const Default: ComponentStoryObj<typeof SmallHeading> = {
  args: { children: "小見出し" },
};
