/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: "12px",
      xm: "14px",
      xs: "16px",
      md: "18px",
      lg: "20px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "34px",
      "5xl": "48px",
      "6xl": "74px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "25px",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      Riviera: ["Riviera Nights Trial", "sans-serif"],
      Jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "light-brown": "#EEE4DB",
        "light-black": "#252525",
        "light-grey": "#A8A9AD",
        "light-grey2": "#e5e5e6",
        "light-blue": "#2A2B2A",
        "light-green": "#5A623D",
        orange: "#AA6627",
      },
    },
  },
  plugins: [],
};
