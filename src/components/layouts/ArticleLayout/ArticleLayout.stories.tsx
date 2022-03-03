import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ArticleLayout } from "./ArticleLayout";

export default {
  title: "layouts/ArticleLayout",
  component: ArticleLayout,
} as ComponentMeta<typeof ArticleLayout>;

export const Default: ComponentStoryObj<typeof ArticleLayout> = {
  args: {
    meta: {
      title: "記事のタイトル",
      category: "カテゴリー名",
      date: "2022-03-01",
    },
    children: "記事の内容",
  },
};
