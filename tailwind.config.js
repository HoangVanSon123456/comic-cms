/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // hỗ trợ dark mode SEO/UX tốt hơn
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#9333ea",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui"],
        heading: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // ẩn scrollbar
  ],
};
