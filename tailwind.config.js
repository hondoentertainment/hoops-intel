/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#050D1A",
        "electric-blue": "#1EC8F5",
        accent: "#1EC8F5",
        emerald: "#10B981",
        rose: "#F43F5E",
        amber: "#F59E0B",
      },
      fontFamily: {
        display: ["Barlow Condensed", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
