// let lastScrollY = window.scrollY;
// const navbar = document.getElementById("nav-bar");
// let ticking = false;

// function handleScroll() {
//   const currentScrollY = window.scrollY;
//   const delta = 10;

//   if (Math.abs(currentScrollY - lastScrollY) > delta) {
//     if (currentScrollY < lastScrollY) {
//       navbar.classList.remove("hidden");
//       navbar.classList.add("visible");
//     } else {
//       navbar.classList.remove("visible");
//       navbar.classList.add("hidden");
//     }

//     lastScrollY = currentScrollY;
//   }

//   ticking = false;
// }

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     window.requestAnimationFrame(handleScroll);
//     ticking = true;
//   }
// });

let lastScrollY = window.scrollY;
const navbar = document.getElementById("nav-bar");
let ticking = false;

function handleScroll() {
  const currentScrollY = window.scrollY;
  const delta = 10;

  if (Math.abs(currentScrollY - lastScrollY) > delta) {
    if (currentScrollY < lastScrollY) {
      // Scrolling up
      navbar.classList.remove("hidden");
      navbar.classList.add("visible");
    } else {
      // Scrolling down
      navbar.classList.remove("visible");
      navbar.classList.add("hidden");
    }

    lastScrollY = currentScrollY;
  }

  ticking = false;
}

// Ensure navbar is visible on load
navbar.classList.add("visible");

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
