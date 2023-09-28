// Define um método personalizado chamado 'entre' no protótipo do tipo 'Number'.
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim; // Retorna verdadeiro se o número estiver dentro do intervalo especificado.
};

// Define uma função anônima chamada 'imprimirResultado' que aceita um parâmetro 'nota'.
const imprimirResultado = function (nota) {
  // Usa o método personalizado 'entre' para verificar em qual categoria a nota se encaixa.
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra."); // Se a nota estiver entre 9 e 10, imprime "Quadro de Honra".
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado."); // Se a nota estiver entre 7 e 8.99, imprime "Aprovado".
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação."); // Se a nota estiver entre 4 e 6.99, imprime "Recuperação".
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado."); // Se a nota estiver entre 0 e 3.99, imprime "Reprovado".
  } else {
    console.log("Nota inválida."); // Se a nota não se encaixar em nenhum dos intervalos, imprime "Nota inválida".
  }
};

// Chama a função 'imprimirResultado' com diferentes valores de nota como argumentos.
imprimirResultado(10); // Exemplo 1: "Quadro de Honra" será impresso no console.
imprimirResultado(8.9); // Exemplo 2: "Aprovado" será impresso no console.
imprimirResultado(6.55); // Exemplo 3: "Recuperação" será impresso no console.
imprimirResultado(2.3); // Exemplo 4: "Reprovado" será impresso no console.
imprimirResultado(-1); // Exemplo 5: "Nota inválida" será impresso no console.
imprimirResultado(11); // Exemplo 6: "Nota inválida" será impresso no console.