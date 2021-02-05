import outSideEvent from "./outsideClick.js";

export default class Menu {
  constructor(menuHamburguer, menuLista, menuItens) {
    this.menuHamburguer = document.querySelector(menuHamburguer);
    this.menuLista = document.querySelector(menuLista);
    this.menuItens = document.querySelectorAll(menuItens);

    this.show = this.show.bind(this);
    this.removeOnScroll = this.removeOnScroll.bind(this);
  }

  show() {
    this.menuLista.classList.toggle("menu-open");
    this.menuItens.forEach((div) => div.classList.toggle("active"));

    outSideEvent(this.menuLista, ["click", "touchstart"], () => {
      this.menuLista.classList.remove("menu-open");
      this.menuItens.forEach((div) => {
        div.classList.remove("active");
      });
    });
  }

  removeOnScroll() {
    this.menuItens.forEach((menuIten) => menuIten.classList.remove("active"));

    if (window.pageYOffset > this.menuLista.offsetTop) {
      this.menuLista.classList.remove("menu-open");
    }
  }

  addEventsMenu() {
    this.menuHamburguer.addEventListener("click", this.show);
    window.addEventListener("scroll", this.removeOnScroll);
  }

  init() {
    if (this.menuHamburguer && this.menuLista) this.addEventsMenu();
    return this;
  }
}
