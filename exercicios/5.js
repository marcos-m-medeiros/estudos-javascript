// Define uma variável chamada valor com um valor numérico (1231).
let valor = 1231;

// Define uma função chamada formatar que recebe um valor numérico como argumento.
function formatar(valor) {
  // Cria um objeto de formatação de número usando Intl.NumberFormat para formatar o valor em moeda brasileira (BRL).
  let brl = Intl.NumberFormat("BRL", {
    style: "currency",
    currency: "BRL",
  });

  // Retorna o valor formatado em moeda brasileira.
  return brl.format(valor);
}

// Chama a função formatar com o valor de exemplo e imprime o resultado no console.
console.log(formatar(valor));