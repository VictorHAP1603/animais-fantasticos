export default class initModal {
  constructor(buttonOpen, buttonClose, modalContainer) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.closeModalContainer = this.closeModalContainer.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  closeModalContainer(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addEventModal() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.closeModalContainer);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.modalContainer) {
      this.addEventModal();
    }

    return this;
  }
}
