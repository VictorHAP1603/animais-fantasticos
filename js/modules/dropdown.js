import outSideClick from "./outsideClick.js";

export default class DropDown {
  constructor(dropDownsMenus, events) {
    this.dropDownsMenus = document.querySelectorAll(dropDownsMenus);
    this.events = events || ["touchstart", "click"];

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add("active");
    outSideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addEventDropDown() {
    this.dropDownsMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownsMenus.length) this.addEventDropDown();
    return this;
  }
}
