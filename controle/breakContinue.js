// Declara um array "nums" com valores de 1 a 10.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop for...in que itera sobre as propriedades do array "nums".
for (let x in nums) {
  // Verifica se o índice "x" é igual a 5.
  if (x == 5) {
    break; // Se for igual a 5, interrompe o loop.
  }
  console.log(`${x} = ${nums[x]}`); // Imprime o índice e o valor do elemento.
}

// Loop for...in que itera sobre as propriedades do array "nums".
for (let y in nums) {
  // Verifica se o índice "y" é igual a 5.
  if (y == 5) {
    continue; // Se for igual a 5, pula a iteração atual e continua para a próxima.
  }
  console.log(`${y} = ${nums[y]}`); // Imprime o índice e o valor do elemento, exceto quando y é igual a 5.
}

// Rótulo externo para o loop.
externo: for (let a in nums) {
  for (let b in nums) {
    // Verifica se "a" é igual a 2 e "b" é igual a 3.
    if (a == 2 && b == 3) {
      break externo; // Se a condição for atendida, interrompe o loop rotulado "externo".
    }
    console.log(`Par = ${a}, ${b}`); // Imprime pares de valores.
  }
}

console.log("Fim!"); // Imprime "Fim!" após a execução dos loops.