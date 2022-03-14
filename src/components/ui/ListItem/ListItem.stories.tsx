import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";

export default {
  title: "ui/ListItem",
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

export const Default: ComponentStoryObj<typeof ListItem> = {
  args: { children: "アイテム" },
  decorators: [
    (Story) => {
      return (
        <ul>
          <Story />
          <Story />
          <Story />
        </ul>
      );
    },
  ],
};
