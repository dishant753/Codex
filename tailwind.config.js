/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#13244B",
          navy2: "#1B3A78",
          red: "#E82226",
          red2: "#FF3B3F",
        },
        ui: {
          bg: "#0B0F14",
          s1: "#101824",
          s2: "#151F2E",
          border: "#22324A",
          text: "#EAF0F6",
          muted: "#A9B4C0",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(6, 12, 22, 0.45)",
        glow: "0 0 0 1px rgba(27, 58, 120, 0.6), 0 10px 30px rgba(10, 20, 35, 0.55)",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
