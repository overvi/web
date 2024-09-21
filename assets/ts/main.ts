new Splide(".splide-comments", {
  perPage: 3,
  gap: "1rem",
  perMove: 1,
  direction: "rtl",
  pagination: false,

  breakpoints: {
    740: {
      perPage: 1,
      perMove: 1,
      width: "100%",
      fixedWidth: "100%",
    },
  },
}).mount();

new Splide(".splide-articles", {
  perPage: 3,
  gap: "1rem",
  perMove: 1,
  direction: "rtl",
  pagination: false,

  breakpoints: {
    540: {
      perPage: 1,
      perMove: 1,
      fixedWidth: "100%",
    },
    800: {
      perPage: 2,
    },
  },
}).mount();

new Splide(".splide-supports", {
  perPage: 6,
  gap: "3rem",
  perMove: 2,
  direction: "rtl",
  arrows: false,
  pagination: false,
  width: "100%",

  breakpoints: {
    430: {
      perPage: 2,
      padding: { right: ".6rem" },
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

new Splide(".splide-why", {
  perPage: 4,
  gap: "1rem",
  perMove: 1,
  direction: "rtl",
  padding: "1rem",
  pagination: false,
  breakpoints: {
    540: {
      perPage: 1,
      perMove: 1,
    },
    800: {
      perPage: 2,
    },

    1000: {
      perPage: 3,
    },
  },
}).mount();
