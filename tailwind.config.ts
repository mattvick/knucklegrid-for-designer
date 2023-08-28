import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      // Todo: revert this
      // Use the default breakpoints and adjust the grid widths accordingly
      'sm': '715px',
      'md': '962px',
    },
  },
  plugins: [],
} satisfies Config;
