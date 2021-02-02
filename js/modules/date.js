export default function initDate() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horSema = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const horarioAberto = horarioAgora >= horSema[0] && horarioAgora < horSema[1];

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.remove("aberto");
    funcionamento.classList.add("closed");
  }
}

// function converterDias() {
//     return time / (24 * 60 * 60 * 1000) // transforma milisegundos em dias
// }
