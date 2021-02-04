import debounce from "./debunce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = [...document.querySelectorAll(sections)];
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // verifica a distancia de cada objeto em
  // relação a posição do scroll do site
  getDistances() {
    this.distance = this.sections.map((section) => {
      const sectionTop = section.offsetTop;
      return {
        section,
        sectionTop: Math.floor(sectionTop - this.windowMetade),
      };
    });
  }

  // adiciona a respectiva classe ao elemento
  // que chegar na distancia do scroll top
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.sectionTop) {
        section.section.classList.add("ativo");
      } else if (section.section.classList.contains("ativo")) {
        section.section.classList.remove("ativo");
      }
    });
  }

  // adiciona os eventos ao respectivos elementos
  addEventScrollWindow() {
    this.getDistances();
    this.checkDistance();
    window.addEventListener("scroll", this.checkDistance);
  }

  // verifica se há algum 'this.sections', se houver aciona a função
  init() {
    if (this.sections.length) this.addEventScrollWindow();
    return this;
  }
}
