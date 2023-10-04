// Define um método personalizado chamado map2 no protótipo do Array
Array.prototype.map2 = function (callback) {
  const newArray = []; // Cria um array vazio para armazenar os resultados
  for (let i = 0; i < this.length; i++) {
    // Percorre cada elemento no array
    newArray.push(callback(this[i], [i], this)); // Aplica a função de retorno (callback) ao elemento e adiciona o resultado ao novo array
  }
  return newArray; // Retorna o novo array com os valores mapeados
};

// Define um array de strings JSON representando produtos
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Define a função para converter as strings JSON em objetos JavaScript
const paraObjeto = (json) => JSON.parse(json);

// Define a função para extrair os preços dos produtos
const apenasPrecos = (produto) => produto.preco;

// Aplica a função para converter para objeto e, em seguida, a função para extrair preços aos elementos do array carrinho
const resultado = carrinho.map2(paraObjeto).map2(apenasPrecos);

// Exibe o resultado no console
console.log(resultado);
