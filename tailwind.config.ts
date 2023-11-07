import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        leftFadeIn: "LeftFadeIn 0.5s ease-in-out",
        rightFadeIn: "RightFadeIn 0.5s ease-in-out",
        bottomFadeIn: "BottomFadeIn 0.5s ease-in-out",
      },
      keyframes: {
        LeftFadeIn: {
          "0%": {
            opacity: "0.7",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        BottomFadeIn: {
          "0%": {
            opacity: "0.7",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        RightFadeIn: {
          "0%": {
            opacity: "0.7",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
