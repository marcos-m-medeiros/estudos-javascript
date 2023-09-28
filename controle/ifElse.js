// Define uma função anônima chamada 'imprimirResultado' que aceita um parâmetro 'nota'.
const imprimirResultado = function (nota) {
  // Verifica se a 'nota' é maior ou igual a 7.
  if (nota >= 7) {
    console.log("Aprovado."); // Se a condição for verdadeira, imprime "Aprovado".
  } else {
    console.log("Reprovado."); // Se a condição for falsa, imprime "Reprovado".
  }
};

// Chama a função 'imprimirResultado' com diferentes valores de nota como argumentos.
imprimirResultado(10); // Exemplo 1: "Aprovado" será impresso no console.
imprimirResultado(4); // Exemplo 2: "Reprovado" será impresso no console.
imprimirResultado("TESTE"); // Exemplo 3: Como "TESTE" não é um número válido, a saída não será previsível.