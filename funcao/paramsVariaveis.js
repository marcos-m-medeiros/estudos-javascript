// Definindo uma função chamada 'soma' que não possui parâmetros declarados.
function soma() {
  // Inicializa uma variável 'soma' com o valor 0.
  let soma = 0;

  // Itera pelos argumentos passados para a função usando o objeto 'arguments'.
  for (let i in arguments) {
    // Adiciona o valor do argumento atual à variável 'soma'.
    soma += arguments[i];
  }

  // Retorna a soma total dos argumentos.
  return soma;
}

// Chama a função 'soma' com diferentes conjuntos de argumentos e imprime o resultado no console.
console.log(soma()); // Imprime 0, já que nenhum argumento foi passado.
console.log(soma(1)); // Imprime 1, pois há um único argumento (1).
console.log(soma(1.1, 2.2, 3.3)); // Imprime a soma de 1.1, 2.2 e 3.3, que é 6.6.

// As duas chamadas abaixo incluem argumentos não numéricos, o que pode levar a resultados inesperados.
console.log(soma(1.1, 2.2, "Teste")); // Imprime 3.3000000000000003, pois "Teste" é tratado como 0.
console.log(soma("a", "b", "c")); // Imprime 0, pois nenhum dos argumentos pode ser convertido para número.
