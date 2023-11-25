import { FORM_CALL, MESSAGE_SUCCEED, ORDER_WINDOW } from './elements.js';

/**
 * Функція виводить в консоль дані з форми.
 */
export function consoleOutputDataForm() {
  FORM_CALL.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const dataForm = new FormData(form);

      const nameUser = dataForm.get('name');
      const phoneUser = dataForm.get('phone');
      const emailUser = dataForm.get('email');

      const userData = { nameUser, phoneUser, emailUser };

      console.log(userData);
      ORDER_WINDOW.classList.remove('w-call-order--open');
      showSucceedMessage();
    });
  });
}

/**
 * Функція виводить повідомлення про успішне надсилання форми.
 */
export function showSucceedMessage() {
  MESSAGE_SUCCEED.classList.add('call-accepted--show');
  setTimeout(() => {
    MESSAGE_SUCCEED.classList.remove('call-accepted--show');
  }, 2500);
}
