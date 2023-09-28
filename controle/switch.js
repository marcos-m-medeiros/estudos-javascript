// Define uma função anônima chamada 'imprimirResultado' que aceita um parâmetro 'nota'.
const imprimirResultado = function (nota) {
  // Utiliza a função Math.floor para arredondar a nota para o número inteiro mais próximo.
  switch (Math.floor(nota)) {
    // Caso a nota seja 10 ou 9, imprime "Quadro de Honra".
    case 10:
    case 9:
      console.log("Quadro de Honra.");
      break;

    // Caso a nota seja 8 ou 7, imprime "Aprovado".
    case 8:
    case 7:
      console.log("Aprovado.");
      break;

    // Caso a nota seja 6, 5 ou 4, imprime "Recuperação".
    case 6:
    case 5:
    case 4:
      console.log("Recuperação.");
      break;

    // Caso a nota seja 3, 2 ou 1, imprime "Reprovado".
    case 3:
    case 2:
    case 1:
      console.log("Reprovado.");
      break;

    // Se a nota não se encaixar em nenhum dos casos anteriores, imprime "Nota Inválida".
    default:
      console.log("Nota Inválida.");
  }
};

// Chama a função 'imprimirResultado' com diferentes valores de nota como argumentos.
imprimirResultado(10); // Exemplo 1: "Quadro de Honra" será impresso no console.
imprimirResultado(8.9); // Exemplo 2: "Aprovado" será impresso no console.
imprimirResultado(6.55); // Exemplo 3: "Recuperação" será impresso no console.
imprimirResultado(2.3); // Exemplo 4: "Reprovado" será impresso no console.
imprimirResultado(-1); // Exemplo 5: "Nota Inválida" será impresso no console.
imprimirResultado(11); // Exemplo 6: "Nota Inválida" será impresso no console.
