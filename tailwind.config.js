/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "vdark-blue-dam": "#202c37",
        "vdark-blue-lgm": "#111517",
        "dark-gray": "#858585",
        "very-light-gray": "#fafafa",
        white: "#ffffff",
      },
      fontFamily: {
        nunito_sans: ["var(--font-nunito_sans)"],
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
