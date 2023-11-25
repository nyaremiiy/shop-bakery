import {
  BTN_ORDER_CALL,
  CLOSE_ORDER_WINDOW,
  ORDER_WINDOW,
} from './elements.js';

/**
 * Функція відкриває модальне вікно для замовлення.
 */
export function openModalOrderWindow() {
  BTN_ORDER_CALL.forEach(btn => {
    btn.addEventListener('click', () => {
        ORDER_WINDOW.classList.add('w-call-order--open');
    });
  });
}

/**
 * Функція закриває модальне вікно замовлення.
 */
export function closeModalWindowOrder() {
  CLOSE_ORDER_WINDOW.addEventListener('click', () => {
    ORDER_WINDOW.classList.remove('w-call-order--open');
  });
}
