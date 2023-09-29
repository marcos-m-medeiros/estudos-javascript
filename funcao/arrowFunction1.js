// Definindo uma função chamada 'dobro' usando a sintaxe de função.
let dobro = function (a) {
  return 2 * a;
};

// Reatribuindo a função 'dobro' usando a sintaxe de arrow function com chaves.
dobro = (a) => {
  return 2 * a;
};

// Reatribuindo a função 'dobro' usando a sintaxe de arrow function com retorno implícito.
dobro = (a) => 2 * a; // Aqui, o retorno é implícito, sem necessidade de chaves.

// Chamando a função 'dobro' passando Math.PI como argumento e imprimindo o resultado no console.
console.log(dobro(Math.PI)); // Isso irá imprimir o dobro de Math.PI

// Definindo uma função chamada 'ola' usando a sintaxe de função sem parâmetros.
let ola = function () {
  return "TESTE1";
};

// Reatribuindo a função 'ola' usando a sintaxe de arrow function com retorno implícito.
ola = () => "TESTE2";

// Reatribuindo a função 'ola' usando a sintaxe de arrow function com um parâmetro ignorado.
ola = (_) => "TESTE3"; // Aqui, o parâmetro _ é ignorado.

// Chamando a função 'ola' e imprimindo o resultado no console.
console.log(ola()); // Isso irá imprimir "TESTE3" porque a função arrow tem um retorno fixo.
