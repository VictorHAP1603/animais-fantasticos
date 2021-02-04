export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.addAnimateScroll = this.addAnimateScroll.bind(this);
  }

  AnimateScroll(item) {
    const sectionTop = item.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - this.windowMetade < 0;

    if (isSectionVisible) {
      item.classList.add("ativo");
    } else if (item.classList.contains("ativo")) {
      item.classList.remove("ativo");
    }
  }

  addAnimateScroll() {
    this.sections.forEach((item) => this.AnimateScroll(item));
  }

  // adiciona os eventos ao respectivos elementos
  addEventScrollWindow() {
    this.addAnimateScroll();
    window.addEventListener("scroll", this.addAnimateScroll);
  }

  // verifica se há algum 'this.sections', se houver aciona a função
  init() {
    if (this.sections.length) this.addEventScrollWindow();
    return this;
  }
}
