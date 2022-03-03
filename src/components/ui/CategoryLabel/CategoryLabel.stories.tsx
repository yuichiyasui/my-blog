import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { CategoryLabel } from "./CategoryLabel";

export default {
  title: "ui/CategoryLabel",
  component: CategoryLabel,
} as ComponentMeta<typeof CategoryLabel>;

export const Default: ComponentStoryObj<typeof CategoryLabel> = {
  args: { categoryName: "カテゴリー名" },
};
