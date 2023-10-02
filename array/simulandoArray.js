// Cria um objeto 'quaseArray' que parece com um array, mas é um objeto com propriedades numéricas.
const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" };
console.log(quaseArray);

// Define uma função personalizada 'toString' para o objeto 'quaseArray'.
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this); // Retorna os valores do objeto como um array.
  },
  enumerable: false, // Define 'enumerable' como falso para que a propriedade 'toString' não seja enumerável.
});

console.log(quaseArray[0]); // Acessa um elemento do 'quaseArray' usando notação de índice.

// Cria um array 'meuArray' tradicional com os mesmos elementos.
const meuArray = ["Rafael", "Ana", "Bia"];

// Imprime o resultado de chamar a função 'toString' no 'quaseArray' e o 'meuArray'.
console.log(quaseArray.toString(), meuArray);
