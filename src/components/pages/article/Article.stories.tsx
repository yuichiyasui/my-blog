import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Article } from "./Article";

export default {
  title: "pages/Article",
  component: Article,
} as ComponentMeta<typeof Article>;

export const Default: ComponentStoryObj<typeof Article> = {
  args: {
    meta: {
      id: "1",
      title: "記事のタイトル",
      category: "カテゴリー名",
      date: "2022-03-01",
    },
    source: "記事の内容",
  },
};
