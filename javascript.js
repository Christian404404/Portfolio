let lastScrollY = window.scrollY;
const navbar = document.getElementById("nav-bar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    navbar.classList.remove("hidden");
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
    navbar.classList.add("hidden");
  }

  lastScrollY = currentScrollY;
});
