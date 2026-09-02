/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fogWhite: "#F7F9FA",
        mistGray: "#DDE3E1",
        sakhalinTeal: "#7FB8B0",
        deepGraphite: "#1F1F1F",
        softGraphite: "#3A3A3A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
