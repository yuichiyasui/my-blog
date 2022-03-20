import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { PageNotFound } from "./PageNotFound";

export default {
  title: "pages/PageNotFound",
  component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

export const Default: ComponentStoryObj<typeof PageNotFound> = {};
