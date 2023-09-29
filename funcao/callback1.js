// Declaração de um array chamado 'fabricantes' com três elementos
const fabricantes = ["Mercedes", "Audi", "BMW"];

// Declaração de uma função chamada 'imprimir' que recebe dois parâmetros: 'nome' e 'indice'
function imprimir(nome, indice) {
  // Exibe no console o índice mais 1 e o nome do fabricante
  console.log(`${indice + 1}. ${nome}`);
}

// Itera sobre o array 'fabricantes' usando o método 'forEach'
// e chama a função 'imprimir' para cada elemento do array
fabricantes.forEach(imprimir);

// Itera sobre o array 'fabricantes' usando uma função de seta (arrow function)
// e exibe cada elemento diretamente no console
fabricantes.forEach((fabricante) => console.log(fabricante)); // Arrow Function
