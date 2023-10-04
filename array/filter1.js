// Definição de um array chamado 'produtos' que contém objetos representando produtos
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

// Filtragem de produtos usando a função filter e uma função de retorno anônima que sempre retorna false
console.log(
  produtos.filter(function (p) {
    return false;
  })
);

// Filtragem de produtos usando a função filter e uma função de retorno que verifica se o produto é frágil e tem preço maior ou igual a 500
console.log(
  produtos.filter(function (p) {
    return p.fragil == true && p.preco >= 500;
  })
);

// Definição de duas funções de filtro, 'caro' e 'fragil'
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

// Filtragem de produtos usando as funções de filtro 'caro' e 'fragil' como argumentos para a função filter
console.log(produtos.filter(caro, fragil));
