/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "20px",
        "2xl": "25px",
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
      },
    },
  },
  plugins: [],
};
