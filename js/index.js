const menu = document.getElementById('js-menu');
const burger = document.getElementById('js-burger');
const closeMenuIcon = document.getElementById('js-close-menu');
const menuLinks = document.querySelectorAll('.nav__link');
const blurScreen = document.getElementById('js-blur-screen');

function openMenu() {
  burger.addEventListener('click', () => {
    toggleMenuClass();
    toggleBlurScreen();
    toggleScrollWindow();
  });
}

function closeMenu() {
  closeMenuIcon.addEventListener('click', () => {
    toggleMenuClass();
    toggleBlurScreen();
    toggleScrollWindow();
  });
}

function toggleMenuClass() {
  menu.classList.toggle('menu--open');
}

function toggleBlurScreen() {
  blurScreen.classList.toggle('blur-screen--active');
}

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenuClass();
    toggleBlurScreen();
    toggleScrollWindow();
  });
});

function toggleScrollWindow() {
  document.body.classList.toggle('noscroll');
}

blurScreen.addEventListener('click', () => {
  toggleMenuClass();
  toggleBlurScreen();
  toggleScrollWindow();
});
blurScreen.addEventListener('touchend', () => {
  toggleMenuClass();
  toggleBlurScreen();
  toggleScrollWindow();
});

openMenu();
closeMenu();
