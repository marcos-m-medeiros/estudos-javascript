// Define uma função chamada res que recebe dois números (n1 e n2) como argumentos.
function res(n1, n2) {
  // Calcula a divisão dos números e armazena o resultado em uma variável chamada "divisao".
  let divisao = n1 / n2;

  // Calcula o resto da divisão dos números e armazena o resultado em uma variável chamada "resto".
  let resto = n1 % n2;

  // Cria um array chamado "resultado" que contém duas strings formatadas com os resultados da divisão e do resto.
  let resultado = ["Divisão: " + divisao, "Resto: " + resto];

  // Retorna o array "resultado" que contém as informações da divisão e do resto.
  return resultado;
}

// Chama a função res com valores de exemplo (n1 = 30, n2 = 4) e imprime o resultado no console.
console.log(res(30, 4));