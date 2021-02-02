export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    const classData = this.tabContent[index].dataset.anime;
    console.log(classData);
    this.tabContent.forEach((tab) => tab.classList.remove("ativo"));
    this.tabContent[index].classList.add("ativo", classData);
  }

  addEventTabNav() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addEventTabNav();
    }
  }
}
