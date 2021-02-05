export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horSema = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAbero() {
    const horarioAberto =
      this.horarioAgora >= this.horSema[0] &&
      this.horarioAgora < this.horSema[1];
    const semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;

    return semanaAberta && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAbero()) {
      this.funcionamento.classList.remove("closed");
      this.funcionamento.classList.add("aberto");
    } else {
      this.funcionamento.classList.remove("aberto");
      this.funcionamento.classList.add("closed");
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

// function converterDias() {
//     return time / (24 * 60 * 60 * 1000) // transforma milisegundos em dias ///
//
