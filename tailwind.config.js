/** @type {import('tailwindcss').Config} */

import { APP_COLOR_SCHEME } from "./config/color-scheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...APP_COLOR_SCHEME,
    },
  },
  plugins: [],
};
