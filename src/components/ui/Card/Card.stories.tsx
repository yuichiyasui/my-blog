import { ArticleMeta } from "@/types/article";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "ui/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const meta: ArticleMeta = {
  id: "1",
  title: "記事タイトル",
  date: "2022-03-01",
  category: "カテゴリー",
};

export const Default: ComponentStoryObj<typeof Card> = {
  args: { meta },
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
