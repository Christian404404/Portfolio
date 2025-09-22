let lastScrollY = window.scrollY;
const navbar = document.getElementById("nav-bar");
let ticking = false;
let hideTimeout;

function handleScroll() {
  const currentScrollY = window.scrollY;
  const scrollLength = 10;
  const autoHideDelay = 2000;

  if (Math.abs(currentScrollY - lastScrollY) > scrollLength) {
    if (currentScrollY < lastScrollY) {
      navbar.classList.remove("hidden");
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
      navbar.classList.add("hidden");
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
