"use strict";
/**
 * Exercício 2
 * Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
 */
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    const { empresaFabricante, empresaMontadora } = data;
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <span>Preço R$ ${data.preco}</span>
      <p>Garantia: ${data.garantia ? data.garantia + ' anos' : 'Não'} </p>
      <p>Segura Acidentes: ${data.seguroAcidentes ? 'Sim' : 'Não'}</p>
      <br/>
      <div>
        <p>Fabricante: ${empresaFabricante.nome}</p>
        <p>De: ${empresaFabricante.pais}</p>
        <p>Desde: ${empresaFabricante.fundacao}</p>
      </div>
      <br/>
      <div>
      <p>Montadora: ${empresaMontadora.nome}</p>
      <p>De: ${empresaMontadora.pais}</p>
      <p>Desde: ${empresaMontadora.fundacao}</p>
    </div>
    </div>
  `;
}
// nome	"Notebook"
// preco	2000
// descricao	"Novo notebook com 128gb de memória ram."
// garantia	"3"
// seguroAcidentes	true
// empresaFabricante	{
//   nome	"Ranek"
//   fundacao	1850
//   pais	"Dinamarca"
// }
// empresaMontadora	{
//   nome	"Handel"
//   fundacao	2000
//   pais	"Polônia"
// }
