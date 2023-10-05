// Define um array de números
let nums = [1, 2, 3, 4, 5];

// Filtra os números pares e os armazena em 'par'
let par = nums.filter(function (e) {
  // Verifica se o número é par
  if (e % 2 == 0) {
    return e; // Se for par, mantém o número no array 'par'
  }
});

// Filtra os números ímpares e os armazena em 'impar'
let impar = nums.filter(function (e) {
  // Verifica se o número é ímpar
  if (e % 2 != 0) {
    return e; // Se for ímpar, mantém o número no array 'impar'
  }
});

// Imprime a quantidade e os números pares e ímpares
console.log(
  `Existem ${par.length} número(s) Par(es). \nSendo eles: ${par} \n\nExistem ${impar.length} número(s) Ímpar(es) \nSendo eles: ${impar}.`
);
