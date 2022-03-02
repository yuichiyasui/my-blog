import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "ui/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStoryObj<typeof Title> = {
  args: { children: "記事のタイトル" },
};
