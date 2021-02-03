export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip em base ao seu lugar na tela
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 160}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // Remove os eventos
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  createToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;

    document.body.appendChild(toolTipBox);
    this.tooltipBox = toolTipBox;
  }

  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.createToolTipBox(currentTarget);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
