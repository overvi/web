/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "460px",
      "mid-sm": "600px",
      "high-sm": "720px",
      md: "917px",
      lg: "1100px",
    },
    extend: {
      backgroundImage: {
        "request-form": "url('./assets/images/request-form-bg.png')",
        "request-demo": "url('./assets/images/request-demo-bg.png')",
        "green-demo": "url('./assets/images/green-demo.png')",
        line: "url('./assets/images/line.svg')",
        "line-small": "url('./assets/images/line-small.svg')",
        "prices-bg": "url('./assets/images/prices-bg.png')",
        "prices-bg-small": "url('./assets/images/bg-price-small.png')",
        articles: "url('./assets/images/articles-bg.png')",
        "article-mobile": "url('./assets/images/mobile-article-bg.png')",
      },
      colors: {
        "orange-400": "#F9B233",
        "gray-300": "#B2B2B2",
        "green-600": "#2FAC66",
        "gray-800": "#515151", // Change later to /50 shade of gray-800 if required
        "green-350": "#EAF7F0",
        "gray-400": "#DFDFDF",
        "gray-50": "#F1F1F1",
        circle: "rgba(29,122,85,30%)",
      },
    },
  },
  plugins: [],
};
