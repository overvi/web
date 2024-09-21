var toggleNav = document.querySelector(".toggle-nav-menu");
var navMenu = document.querySelector(".nav-menu");
toggleNav === null || toggleNav === void 0 ? void 0 : toggleNav.addEventListener("click", function () {
    if (navMenu.style.gridTemplateRows == "1fr") {
        navMenu.style.gridTemplateRows = "0fr";
    }
    else {
        navMenu.style.gridTemplateRows = "1fr";
    }
});
//# sourceMappingURL=nav.js.map