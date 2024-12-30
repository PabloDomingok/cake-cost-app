const nav = document.querySelector('.nav-links');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('visible');
});