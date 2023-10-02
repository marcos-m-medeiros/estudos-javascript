// Temos um array de strings, onde cada string representa um objeto JSON.
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Vamos fazer o parsing (análise) das strings JSON em objetos JavaScript.
const objetosDoCarrinho = carrinho.map((item) => JSON.parse(item));

// Agora, temos um array de objetos JavaScript que podemos manipular.
// Vamos criar um novo array contendo apenas os valores da propriedade "preco".
const precos = objetosDoCarrinho.map((obj) => obj.preco);

// O array "precos" agora contém os valores numéricos da propriedade "preco" de cada objeto.
console.log(precos); // Resultado: [3.45, 13.90, 41.22, 7.50]
