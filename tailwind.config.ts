import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface/200": "#FAFAFA",
      },
      extend: {
        backgroundImage: {
          banner: "/banner.png",
        },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans"],
        Inter: ["Inter", "sans"],
      },
    },
  },
  plugins: [],
};

export default config;