/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "request-form": "url('./assets/images/request-form-bg.png')",
      },
      colors: {
        "orange-400": "#F9B233",
      },
    },
  },
  plugins: [],
};
