window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.landing-header__img');
  let scrollPosition = window.scrollY;

  parallax.style.transform = 'translateY(' + scrollPosition *.5 + 'px)';
})