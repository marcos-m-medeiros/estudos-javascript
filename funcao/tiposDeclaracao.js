// Chamando a função 'soma' antes de sua declaração
console.log(soma(3, 4));

// Function declaration - Declaração de função
// Essa função 'soma' aceita dois parâmetros e retorna sua soma
function soma(x, y) {
  return x + y;
}

// Function expression - Expressão de função
// Declara uma função anônima e a atribui a uma variável 'sub'
// Essa função 'sub' aceita dois parâmetros e retorna sua subtração
const sub = function (x, y) {
  return x - y;
};

// Chamando a função 'sub'
console.log(sub(3, 4));

// Named function expression - Expressão de função nomeada
// Declara uma função anônima com um nome 'mult'
// Essa função 'mult' aceita dois parâmetros e retorna sua multiplicação
const mult = function mult(x, y) {
  return x * y;
};

// Chamando a função 'mult'
console.log(mult(3, 4));
