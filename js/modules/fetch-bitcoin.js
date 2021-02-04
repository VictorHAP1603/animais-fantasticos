export default function initFetchBitcoin(url) {
  async function getBitcoin() {
    // Se resolve primeiro o que está em entre parenteses,
    // nisso, me retorna a 'Response', após irá retornar o JSON completo
    // com o await e .json() fora dos parenteses
    const responseBitcoin = await (await fetch(url)).json();
    const btcPreco = document.querySelector(".btc-preco");
    const btcBRL = (1000 / responseBitcoin.BRL.sell).toFixed(4);

    btcPreco.innerHTML = btcBRL;
  }

  function catchBitcoin(error) {
    console.log(error);
    const btcLi = document.querySelector(".btc-li");
    btcLi.innerHTML = "Não foi possível pegar os dados de Bitcoins";
  }

  function innerTextBitcoin() {
    try {
      getBitcoin();
    } catch (error) {
      catchBitcoin(error);
    }
  }

  return innerTextBitcoin();
}
