const primaryNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

function changeAttrToFalse() {
  primaryNav.setAttribute('data-visible', 'false');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    changeAttrToFalse();
  }

  primaryNav.addEventListener('click', function () {
    setTimeout(function () {
      changeAttrToFalse();
    }, 500);
  });
});
