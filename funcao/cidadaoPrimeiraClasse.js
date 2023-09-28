// Função em JS é de primeira classe, o que significa que podem ser tratadas como objetos.
// High-order function é uma função que pode receber outra função como argumento ou retornar uma função.

function fun1() {}

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

// Chamando a primeira função no array com argumentos 2 e 3 e imprimindo o resultado (5).
console.log(array[0](2, 3));

// Armazenando uma função em um atributo de um objeto
const obj = {};
obj.falar = function () {
  return "TESTE";
};

// Chamando a função armazenada no objeto e imprimindo o resultado ("TESTE").
console.log(obj.falar());

// Passando uma função como argumento para outra função
function run(fun) {
  fun();
}

// Chamando a função 'run' com uma função anônima como argumento que imprime "TESTE 2".
run(function () {
  console.log("TESTE 2");
});

// Uma função pode retornar ou conter outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

// Chamando a função 'soma' com argumentos 2 e 3, que retorna uma nova função.
// Em seguida, chamamos essa nova função com o argumento 4, resultando na impressão de 9.
soma(2, 3)(4);

// Armazenando a função retornada em 'cincoMais' e chamando-a com o argumento 4, que resulta em 9.
const cincoMais = soma(2, 3);
cincoMais(4);