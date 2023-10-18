/** @type {import('tailwindcss').Config} */

import { APP_COLOR_SCHEME } from "./config/color-scheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: "1024px",
      xl: "1366px",
    },
    colors: {
      ...APP_COLOR_SCHEME,
    },
  },
  plugins: [],
};
