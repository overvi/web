new Splide(".splide-prices", {
  perPage: 3,
  gap: "1rem",
  perMove: 1,
  direction: "rtl",
  pagination: false,

  breakpoints: {
    730: {
      perPage: 1,
    },

    1100: {
      perPage: 2,
    },
  },
}).mount();

new Splide(".splide-types", {
  perPage: 4,
  gap: "1rem",
  perMove: 1,
  direction: "rtl",
  pagination: false,
  arrows: false,
  fixedWidth: "fit-content",
  breakpoints: {
    430: {
      perPage: 2,
    },
    600: {
      perPage: 3,
      perMove: 1,
    },
    900: {
      perPage: 4,
      perMove: 1,
    },
  },
}).mount();
