// Define uma função 'soma' que recebe dois parâmetros e retorna a soma deles.
const soma = function (x, y) {
  return x + y;
};

// Define uma função 'imprimirResultado' que recebe dois números e uma operação como parâmetro
const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

// Chama 'imprimirResultado' com os valores 3 e 4 e nenhum terceiro parâmetro. O resultado será a soma de 3 e 4, ou seja, 7.
imprimirResultado(3, 4);

// Chama 'imprimirResultado' com os valores 3 e 4 e a função 'soma' como terceiro parâmetro. O resultado será a mesma soma, ou seja, 7.
imprimirResultado(3, 4, soma);

// Chama 'imprimirResultado' com os valores 3 e 4 e uma função anônima que subtrai os números. O resultado será a subtração de 3 e 4, ou seja, -1.
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});

// Chama 'imprimirResultado' com os valores 3 e 4 e uma função de seta que multiplica os números. O resultado será a multiplicação de 3 e 4, ou seja, 12.
imprimirResultado(3, 4, (x, y) => x * y);

// Cria um objeto 'pessoa' com um método 'falar' que imprime "Hello world!" quando chamado.
const pessoa = {
  falar: function () {
    console.log("Hello world!");
  },
};

// Chama o método 'falar' do objeto 'pessoa', que imprime "Hello world!" no console.
pessoa.falar();
