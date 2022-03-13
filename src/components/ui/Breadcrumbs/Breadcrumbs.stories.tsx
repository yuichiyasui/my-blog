import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "ui/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const Default: ComponentStoryObj<typeof Breadcrumbs> = {
  args: {
    breadcrumbs: [
      {
        label: "TOP",
        href: "/",
      },
      {
        label: "記事タイトル",
      },
    ],
  },
};
