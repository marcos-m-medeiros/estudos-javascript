// Definindo um novo método chamado 'filter2' para o protótipo da classe Array.
Array.prototype.filter2 = function (callback) {
  // Inicializando um novo array vazio para armazenar os resultados filtrados.
  const newArray = [];

  // Iterando através de cada elemento do array original.
  for (let i = 0; i < this.length; i++) {
    // Verificando se o resultado da chamada da função 'callback' é verdadeiro para o elemento atual.
    if (callback(this[i], i, this)) {
      // Se for verdadeiro, adiciona o elemento ao novo array.
      newArray.push(this[i]);
    }
  }

  // Retorna o novo array contendo os elementos filtrados.
  return newArray;
};

// Definindo um array 'produtos' com objetos representando produtos.
const produtos = [
  {
    nome: "Notebook",
    preco: 2499,
    fragil: true,
  },
  {
    nome: "iPad Pro",
    preco: 4199,
    fragil: true,
  },
  {
    nome: "Copo de Vidro",
    preco: 12.49,
    fragil: true,
  },
  {
    nome: "Copo de Plástico",
    preco: 18.99,
    fragil: false,
  },
];

// Definindo uma função 'caro' que verifica se o preço de um produto é maior ou igual a 500.
const caro = (produto) => produto.preco >= 500;

// Definindo uma função 'fragil' que verifica se um produto é frágil.
const fragil = (produto) => produto.fragil;

// Filtrando os produtos primeiro pela função 'caro' e depois pela função 'fragil' usando o método 'filter2'.
console.log(produtos.filter2(caro).filter2(fragil));
