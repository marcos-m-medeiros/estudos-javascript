// Definindo uma função chamada 'criarProduto' que recebe dois parâmetros: 'nome' e 'preco'
function criarProduto(nome, preco) {
  // Dentro da função, um objeto literal é criado e retornado
  return {
    // A propriedade 'nome' recebe o valor do parâmetro 'nome'
    nome,

    // A propriedade 'preco' recebe o valor do parâmetro 'preco'
    preco,

    // A propriedade 'desconto' é definida com o valor 0.1 (representando 10% de desconto)
    desconto: 0.1,
  };
}

// Chamando a função 'criarProduto' para criar dois objetos que representam produtos,
// com diferentes valores para 'nome' e 'preco', e imprimindo os resultados no console

// Criando um objeto de produto com nome "Notebook" e preço 2199.49
console.log(criarProduto("Notebook", 2199.49));

// Criando um objeto de produto com nome "iPad" e preço 1199.49
console.log(criarProduto("iPad", 1199.49));
