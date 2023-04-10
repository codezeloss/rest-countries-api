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
        "1bp": { max: "1300px" },
        "2bp": { max: "1160px" },
        "3bp": { max: "868px" },
        "4bp": { max: "640px" },
        "5bp": { max: "543px" },
      },
    },
  },
  plugins: [],
};
