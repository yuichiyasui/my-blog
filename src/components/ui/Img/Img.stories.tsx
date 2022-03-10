import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Img } from "./Img";

export default {
  title: "ui/Img",
  component: Img,
} as ComponentMeta<typeof Img>;

export const Default: ComponentStoryObj<typeof Img> = {
  args: {
    className: "w-[400px]",
    src: "/articles/1/main.jpg",
    width: "400",
    height: "210",
    alt: "",
  },
};
