import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#fffaf0",
        grid: "#ded7c9",
        violetPop: "#ba3ff5",
        cyanPop: "#21c7f4",
        yellowPop: "#ffd84d",
        greenPop: "#00a878",
        orangePop: "#ff7a3d",
        bluePop: "#1f67ff",
        primary: "#dd2241",
        primarySoft: "#f8cdd5",
      },
      boxShadow: {
        deck: "0 24px 80px rgba(20, 20, 20, 0.12)",
        sticker: "0 12px 30px rgba(20, 20, 20, 0.16)",
      },
      borderRadius: {
        deck: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
