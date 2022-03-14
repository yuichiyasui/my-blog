import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TwitterShare } from "./TwitterShare";

export default {
  title: "ui/TwitterShare",
  component: TwitterShare,
} as ComponentMeta<typeof TwitterShare>;

export const Default: ComponentStoryObj<typeof TwitterShare> = {
  args: {
    path: "/article/1",
    title: "ページのタイトル",
  },
};
