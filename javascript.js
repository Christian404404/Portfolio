const navbar = document.getElementById("nav-bar");
let lastScrollY = window.scrollY;
let ticking = false;
let hideTimeout;

const scrollLength = 10;
const autoHideDelay = 4000;

function showNavbar() {
  navbar.classList.remove("hidden");
  navbar.classList.add("visible");

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    navbar.classList.remove("visible");
    navbar.classList.add("hidden");
  }, autoHideDelay);
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (Math.abs(currentScrollY - lastScrollY) > scrollLength) {
    // UP
    if (currentScrollY < lastScrollY) {
      showNavbar();
    } else {
      // DOWN
      navbar.classList.remove("visible");
      navbar.classList.add("hidden");

      clearTimeout(hideTimeout);
    }
    lastScrollY = currentScrollY;
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
