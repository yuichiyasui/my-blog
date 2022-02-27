import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "ui/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStoryObj<typeof Card> = {
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "360px" }}>
          <Story />
        </div>
      );
    },
  ],
};
