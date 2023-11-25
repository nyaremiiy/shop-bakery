import { BURGER, CLOSE_MENU_ICON, MENU_LINKS } from './elements.js';
import { toggleElements } from './helpers.js';

/**
 * Функція спрацьовує при кліку на іконку бургера.
 *
 */
export function openMenuBurger() {
  BURGER.addEventListener('click', () => {
    toggleElements();
  });
}

/**
 * Функція закриває меню та блюр на екрані, спрацьовує при натисканні на хрестик закриття.
 */
export function closeMenu() {
  CLOSE_MENU_ICON.addEventListener('click', () => {
    toggleElements();
  });
}

/**
 * Функція закриває меню та блюр і переходить за посиланням на яке було натиснуто.
 */
export function menuLinkClick() {
  MENU_LINKS.forEach(link => {
    link.addEventListener('click', () => {
      toggleElements();
    });
  });
}
