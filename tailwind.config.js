/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-custom": "320px",
        "md-custom": "500px",
      },
    },
  },
  plugins: [],
};
