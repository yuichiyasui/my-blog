const path = require("path");

module.exports = {
  typescript: { reactDocgen: false },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve = {
      extensions: [".ts", ".tsx", ".js", ".css"],
      alias: {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      },
    };

    return config;
  },
};
