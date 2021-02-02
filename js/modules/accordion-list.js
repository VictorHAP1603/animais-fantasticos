export default class Accordion {
  constructor(list) {
    this.accordion = document.querySelectorAll(list);
    this.activeClass = "ativo";
    this.showDD = "showDD";
  }

  accordionList(item) {
    const dd = item.nextElementSibling;
    dd.classList.toggle(this.showDD);
    item.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordion.forEach((item) => {
      item.addEventListener("click", () => this.accordionList(item));
    });
  }

  init() {
    if (this.accordion.length) {
      this.addAccordionEvent();
    }
  }
}
