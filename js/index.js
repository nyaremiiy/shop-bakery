const menu = document.getElementById('js-menu');
const burger = document.getElementById('js-burger');
const closeMenuIcon = document.getElementById('js-close-menu');
const menuLinks = document.querySelectorAll('.nav__link--menu');
const blurScreen = document.getElementById('js-blur-screen');
const btnOrderCall = document.querySelectorAll('.btn-order-call');
const orderWindow = document.getElementById('js-order-window');
const closeOrderWindow = document.getElementById('js-close-order-window');

/**
 * Функція спрацьовує при кліку на іконку бургера.
 *
 */
function openMenuBurger() {
  burger.addEventListener('click', () => {
    toggleElements();
  });
}

openMenuBurger();

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
  blurScreen.classList.toggle('blur-screen--active');
}

/**
 * Функція, яка при кліку або свайпі по заблюреному вікні закриває його та закриває меню.
 */
function closeAllElementInPage() {
  blurScreen.addEventListener('touchend', () => {
    toggleElements();
  });
}

closeAllElementInPage();

/**
 * Функція додає та видаляє додатковий клас відкриття для меню.
 */
function toggleMenuClass() {
  menu.classList.toggle('menu--open');
}

/**
 * Функція закриває меню та блюр на екрані, спрацьовує при натисканні на хрестик закриття.
 */
function closeMenu() {
  closeMenuIcon.addEventListener('click', () => {
    toggleElements();
  });
}

closeMenu();

/**
 * Функція закриває меню та блюр і переходить за посиланням на яке було натиснуто.
 */
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleElements();
  });
});

/**
 * Toggle функція
 */
function toggleElements() {
  toggleScrollWindow();
  toggleBlurScreen();
  toggleMenuClass();
}

/**
 * Функція відкриває модальне вікно для замовлення.
 */
function openModalOrderWindow() {
  btnOrderCall.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleModalWindowOrder();
    });
  });
}

openModalOrderWindow();

/**
 * Функція видаляє та додає клас до модального вікна.
 */
function toggleModalWindowOrder() {
  orderWindow.classList.toggle('w-call-order--open');
}

/**
 * Функція закриває модальне вікно замовлення.
 */
function closeModalWindowOrder() {
  closeOrderWindow.addEventListener('click', () => {
    toggleModalWindowOrder();
  });
}

closeModalWindowOrder();

/**
 * Робота з формою та вікном успішного надсиллання даних.
 */
const formCall = document.querySelectorAll('.form-call');
const messageSucceed = document.querySelector('.call-accepted');

/**
 * Функція виводить в консоль дані з форми.
 */
function consoleOutputDataForm() {
  formCall.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const dataForm = new FormData(form);

      const nameUser = dataForm.get('name');
      const phoneUser = dataForm.get('phone');
      const emailUser = dataForm.get('email');

      const userData = { nameUser, phoneUser, emailUser };

      console.log(userData);

      showSucceedMessage();
    });
  });
}

consoleOutputDataForm();

/**
 * Функція виводить повідомлення про успішне надсилання форми.
 */
function showSucceedMessage() {
  messageSucceed.classList.add('call-accepted--show');
  setTimeout(() => {
    messageSucceed.classList.remove('call-accepted--show');
  }, 2500);
}

// Swiper
new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 20,
  autoHeight: true,
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    480: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 2.5,
    },
    1279: {
      slidesPerView: 3,
    },
  },
});
