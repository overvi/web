//@ts-ignore
new Splide(".splide-team", {
    perPage: 5,
    gap: "1rem",
    perMove: 1,
    direction: "rtl",
    pagination: false,
    arrows: false,
    breakpoints: {
        400: {
            perMove: 1,
            perPage: 1,
        },
        740: {
            perPage: 2,
            perMove: 2,
        },
        1000: {
            perMove: 3,
            perPage: 3,
        },
    },
}).mount();
//# sourceMappingURL=about.js.map