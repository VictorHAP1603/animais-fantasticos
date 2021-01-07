export default function initDate() {    

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
    const hoarioSemana = funcionamento.dataset.horario.split(',').map(Number)

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1
    const horarioAberto = (horarioAgora >= hoarioSemana[0] && horarioAgora < hoarioSemana[1])

    if (semanaAberta && horarioAberto) {
        funcionamento.classList.add('aberto')
    } else {
        funcionamento.classList.remove('aberto')
        funcionamento.classList.add('closed')
    }
}
    






  // function converterDias() {
    //     return time / (24 * 60 * 60 * 1000) // transforma milisegundos em dias
    // }