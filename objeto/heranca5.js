// Verificando o tipo da função construtora String
console.log(typeof String); // 'function'

// Verificando o tipo da função construtora Array
console.log(typeof Array); // 'function'

// Verificando o tipo da função construtora Object
console.log(typeof Object); // 'function'

// Adicionando um método personalizado 'reverse' ao protótipo de String
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

// Usando o método personalizado 'reverse' em uma string
console.log("Marcos".reverse()); // "socraM"

// Adicionando um método personalizado 'first' ao protótipo de Array
Array.prototype.first = function () {
  return this[0];
};

// Usando o método personalizado 'first' em arrays
console.log([1, 2, 3, 4, 5].first()); // 1
console.log(["a", "b", "c"].first()); // "a"

// Sobrescrevendo o método 'toString' no protótipo de String (NÃO é uma prática recomendada)
String.prototype.toString = function () {
  return "Lascou tudo";
};

// Usando o método personalizado 'reverse' novamente em uma string
console.log("Marcos".reverse()); // "socraM"

// Observação: Substituir o método 'toString' globalmente não é uma boa prática, pois afeta todos os objetos String.
