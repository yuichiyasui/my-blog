import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { BaseLayout } from "./BaseLayout";

export default {
  title: "layouts/BaseLayout",
  component: BaseLayout,
} as ComponentMeta<typeof BaseLayout>;

export const Default: ComponentStoryObj<typeof BaseLayout> = {
  args: {
    children: (
      <div className="grid place-items-center h-[600px]">
        <p>コンテンツ</p>
      </div>
    ),
  },
};
