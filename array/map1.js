// Criamos um array 'nums' com alguns números.
const nums = [1, 2, 3, 4, 5];

// Usando o método 'map', criamos um novo array 'resultado' que contém cada elemento do array 'nums' multiplicado por 2.
let resultado = nums.map(function (e) {
  return e * 2;
});

// Imprimimos o array 'resultado' no console, que agora contém [2, 4, 6, 8, 10].
console.log(resultado);

// Definimos três funções de transformação:
// 1. 'soma10' que adiciona 10 a um número.
const soma10 = (e) => e + 10;
// 2. 'triplo' que multiplica um número por 3.
const triplo = (e) => e * 3;
// 3. 'paraDinheiro' que formata um número como uma string monetária brasileira (R$).
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

// Usamos encadeamento de métodos 'map' para aplicar as três transformações em sequência no array 'nums'.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

// Imprimimos o array 'resultado' no console, que agora contém strings monetárias formatadas.
console.log(resultado);
