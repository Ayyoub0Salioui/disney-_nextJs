import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        slideImageShadow: "7px 7px 19px 0px rgba(0,0,0,0.75)",
        movieShadow: "2px 6px 14px 0px rgba(0,0,0,0.75)",
        movieShadowActive: "2px 12px 25px 0px rgba(0,0,0,0.75)",
        studioShadow: "0px 11px 8px 0px rgba(0,0,0,0.75)",
        studioShadowActive: "-2px 8px 42px -3px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
