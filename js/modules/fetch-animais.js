import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(url, target) {
  // cria a div contendo as informaçoes
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3>
            <span data-numero>${animal.total}</span>`;

    return div;
  }

  // adiciona os elementos criados no ".numeros-grid"
  const numerosGrid = document.querySelector(target);

  function addAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // ativa a classe AnimaNumeros fazendo com que
  // funcione a implementação
  function animalAnimation() {
    const animaNumeros = new AnimaNumeros("[data-numero]", "ativo", ".numeros");
    animaNumeros.init();
  }

  // puxa os itens do arquivo JSON e
  // ativa a função createAnimal passando
  // como parametro os itens do JSON
  async function fetchAnimais() {
    try {
      // transforma em response, ou seja, espera a resposta
      // transformar a resposta para JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação do JSON executa as funções
      animaisJSON.forEach((animal) => addAnimal(animal, numerosGrid));
      animalAnimation();
    } catch (error) {
      console.log(error);
    }
  }

  return fetchAnimais();
}
