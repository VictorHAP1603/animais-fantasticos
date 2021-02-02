import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import initScrollWindow from "./modules/scroll-window.js";
import { initShowMenu, initRemoveMenu } from "./modules/menu-mobile.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown.js";
import initDate from "./modules/date.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollsuave = new ScrollSuave("[data-menu]");
scrollsuave.init();

const accordionList = new Accordion('[data-anime="accordion"] dt');
accordionList.init();

initScrollWindow();
initShowMenu();
initRemoveMenu();
initTabNav();
initModal();
initToolTip();
initDropDown();
initDate();
initFetchAnimais();
initFetchBitcoin();
