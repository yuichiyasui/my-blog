/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        min: ["10px", { letterSpacing: "1.5" }],
      },
    },
  },
  plugins: [],
};
