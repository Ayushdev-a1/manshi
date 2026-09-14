/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        forest: "#143b32",
        paper: "#f5f2e9",
        sage: "#b8c9b3",
        terracotta: "#d4774a",
        moss: "#718a73",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(20,59,50,.12)",
      },
    },
  },
  plugins: [],
};