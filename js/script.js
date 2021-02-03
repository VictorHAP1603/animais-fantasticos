import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import initScrollWindow from "./modules/scroll-window.js";
import { initShowMenu, initRemoveMenu } from "./modules/menu-mobile.js";
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown.js";
import initDate from "./modules/date.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollsuave = new ScrollSuave("[data-menu]");
scrollsuave.init();

const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

const tabnav = new TabNav(
  "[data-tab='menu'] li",
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

initScrollWindow();
initShowMenu();
initRemoveMenu();
initToolTip();
initDropDown();
initDate();
initFetchAnimais();
initFetchBitcoin();
