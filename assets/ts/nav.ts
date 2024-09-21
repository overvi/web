const toggleNav = document.querySelector(".toggle-nav-menu");
const navMenu = document.querySelector(".nav-menu")! as HTMLElement;

toggleNav?.addEventListener("click", () => {
  if (navMenu.style.gridTemplateRows == "1fr") {
    navMenu.style.gridTemplateRows = "0fr";
  } else {
    navMenu.style.gridTemplateRows = "1fr";
  }
});
