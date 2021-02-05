import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import ScrollAnima from "./modules/scroll-anima.js";
import DropDown from "./modules/dropdown.js";
import Menu from "./modules/menu-mobile.js";
import Funcionamento from "./modules/date.js";
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

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDown = new DropDown("[data-drop]");
dropDown.init();

initFetchAnimais("../../animaisapi.json", ".numeros-grid");
initFetchBitcoin("https://blockchain.info/ticker");

const menuMobile = new Menu(".hamburguer", ".menu ul", "[data-mobile]");
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();
