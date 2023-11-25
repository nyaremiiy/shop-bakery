import { consoleOutputDataForm } from './dataForm.js';
import { BTN_SHOW_SUCCEED } from './elements.js';
import { closeAllElementInPage } from './helpers.js';
import { closeMenu, menuLinkClick, openMenuBurger } from './menu.js';
import { closeModalWindowOrder, openModalOrderWindow } from './modalWindow.js';

openMenuBurger();

closeMenu();

closeAllElementInPage();

menuLinkClick();

openModalOrderWindow();

closeModalWindowOrder();

consoleOutputDataForm();


