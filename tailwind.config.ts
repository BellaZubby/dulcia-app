import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "primary-50": "#2D4F8F",
        "primary-100": "#FFE270",
        "primary-150": "#CBD5E1",
        "primary-200": "#0A2344",
        "primary-300": "#876502",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": "linear-gradient(90deg, #2D4F8F 35%, #876502 65%)",
        "dulcia-school":"url('/dulcia-school2.jpg')",
      }),
    },
    screens: {
      xxs: "390px",
      xs: "400px",
      ssm: "600px",
      sm: "850px",
      bm: "1000px",
      md: "1060px",
    },
  },
  plugins: [],
};
export default config;
