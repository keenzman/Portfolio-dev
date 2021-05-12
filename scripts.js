// Parallax effect on scroll
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".landing-header__img");
  let scrollPosition = window.scrollY;

  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});

// carousel config with responsive breakpoints
const config = {
  type: "slider",
  breakpoints: {
    1200: {
      perView: 1,
    },
    800: {
      perView: 1,
    },
    600: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();
