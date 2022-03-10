import "../src/styles/globals.css";

import * as NextImage from "next/image";
import { ImageProps } from "next/image";

import { addDecorator } from "@storybook/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

/** next/routerのモック化 */
addDecorator((Story) => (
  <MemoryRouterProvider>
    <Story />
  </MemoryRouterProvider>
));

/** next/imageのモック化 */
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: ImageProps) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
