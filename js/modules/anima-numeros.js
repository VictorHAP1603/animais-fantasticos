export default class AnimaNumeros {
  constructor(numeros, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(num) {
    const total = +num.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;

      num.innerHTML = start;
      if (start >= total) {
        num.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((num) => this.constructor.incrementNumber(num));
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe ativa é adicionada ao element target

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
