// Cria um array 'aprovados' com quatro elementos
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Usando o método forEach para iterar sobre os elementos do array 'aprovados'
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
// O forEach aceita uma função de callback que é executada para cada elemento do array.
// Nesse caso, a função de callback recebe dois parâmetros: 'nome' e 'indice'.
// A função de callback imprime cada elemento do array, junto com seu índice, formatado.

// Usando uma arrow function no forEach para simplificar a sintaxe
aprovados.forEach((nome) => console.log(nome));
// Nesse caso, a arrow function recebe apenas o 'nome' como parâmetro e imprime cada elemento do array.

// Definindo uma função separada chamada 'exibirAprovados' que imprime um aprovado
const exibirAprovados = (aprovado) => console.log(aprovado);
// A função 'exibirAprovados' recebe um único parâmetro 'aprovado' e o imprime.

// Usando o método forEach novamente, mas passando a função 'exibirAprovados' como callback
aprovados.forEach(exibirAprovados);
// O forEach chama a função 'exibirAprovados' para cada elemento do array 'aprovados',
// passando o elemento como argumento, que é então impresso pela função.
