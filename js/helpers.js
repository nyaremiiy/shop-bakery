import { BLUR_SCREEN, MENU } from './elements.js';

/**
 * Toggle функція
 */
export function toggleElements() {
  toggleScrollWindow();
  toggleBlurScreen();
  toggleMenuClass();
}

/**
 * Функція додає до тегу body клас 'noscroll', який видаляє скрол на сторінці.
 */
function toggleScrollWindow() {
  document.body.classList.toggle('noscroll');
}

/**
 * Функція додає та видаляє заблюрений екран.
 */
function toggleBlurScreen() {
  BLUR_SCREEN.classList.toggle('blur-screen--active');
}

/**
 * Функція додає та видаляє додатковий клас відкриття для меню.
 */
function toggleMenuClass() {
  MENU.classList.toggle('menu--open');
}

/**
 * Функція, яка при кліку або свайпі по заблюреному вікні закриває його та закриває меню.
 */
export function closeAllElementInPage() {
  BLUR_SCREEN.addEventListener('touchend', () => {
    toggleElements();
  });
}
