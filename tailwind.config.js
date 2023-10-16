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
        xl: "20px",
        "2xl": "130px",
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
        "dark-black": "#2a2b2a",
        "dark-purple": "#695978",
        orange: "#AA6627",
      },
      backgroundImage: {
        "hero-section-img": "url('assets/images/webp/herosection_bg_img.webp')",
      },
    },
  },
  plugins: [],
};
