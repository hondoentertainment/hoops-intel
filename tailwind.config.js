/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#f7f7f5",
        "electric-blue": "#8ec8f0",
        accent: "#8ec8f0",
        emerald: "#1f9d6a",
        rose: "#F43F5E",
        amber: "#ff7a17",
      },
      fontFamily: {
        display: ["Geist", "Inter", "sans-serif"],
        body: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
