/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "460px",
      "mid-sm": "600px",
      md: "917px",
    },
    extend: {
      backgroundImage: {
        "request-form": "url('./assets/images/request-form-bg.png')",
        "request-demo": "url('./assets/images/request-demo-bg.png')",
      },
      colors: {
        "orange-400": "#F9B233",
        "gray-300": "#B2B2B2",
        "green-600": "#2FAC66",
        "gray-800": "#515151", // Change later to /50 shade of gray-800 if required
        "green-350": "#EAF7F0",
        "gray-400": "#DFDFDF",
        circle: "rgba(29,122,85,30%)",
      },
    },
  },
  plugins: [],
};
