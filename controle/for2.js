// Declara um array "notas" com valores numéricos que representam notas.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// Loop for...in que itera sobre as propriedades do array "notas".
// A variável "i" recebe o índice das propriedades do array.
for (let i in notas) {
  console.log(i, notas[i]); // Imprime o índice (i) e o valor da nota.
}

// Declara um objeto "pessoa" com várias propriedades.
const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64,
};

// Loop for...in que itera sobre as propriedades do objeto "pessoa".
// A variável "atributo" recebe o nome das propriedades do objeto.
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`); // Imprime o nome da propriedade e seu valor.
}
