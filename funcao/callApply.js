// Definindo uma função chamada 'getPreco' que recebe dois parâmetros com valores padrão
function getPreco(imposto = 0, moeda = "R$") {
  // Retorna uma string formatada com o preço do produto, aplicando desconto e imposto
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

// Definindo um objeto 'produto' com propriedades nome, preço, desconto e a função 'getPreco'
const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

// Definindo variáveis globais 'preco' e 'desc' (fora do escopo do objeto 'produto')
global.preco = 20;
global.desc = 0.1;

// Chamando a função 'getPreco' diretamente, usando o escopo global
console.log(getPreco()); // Imprime "R$ 18" (preço global * (1 - desconto global) * (1 + imposto padrão))

// Chamando a função 'getPreco' a partir do objeto 'produto', onde 'this' se refere ao objeto 'produto'
console.log(produto.getPreco()); // Imprime "R$ 3919.65" (preço produto * (1 - desconto produto) * (1 + imposto padrão))

// Criando um objeto 'carro' com propriedades preço e desconto
const carro = {
  preco: 49990,
  desc: 0.2,
};

// Usando 'call' para chamar a função 'getPreco' a partir do objeto 'carro' com argumentos específicos
console.log(getPreco.call(carro)); // Imprime "R$ 39992" (preço carro * (1 - desconto carro) * (1 + imposto padrão))

// Usando 'apply' para chamar a função 'getPreco' a partir do objeto 'carro' com argumentos em um array
console.log(getPreco.apply(carro)); // Imprime "R$ 39992" (mesmo resultado que 'call')

// Usando 'call' para chamar a função 'getPreco' a partir do objeto 'carro' com imposto e moeda personalizados
console.log(getPreco.call(carro, 0.17, "$")); // Imprime "$ 46790.2" (preço carro * (1 - desconto carro) * (1 + imposto personalizado))

// Usando 'apply' para chamar a função 'getPreco' a partir do escopo global com argumentos em um array
console.log(getPreco.apply(global, [0.17, "$"])); // Imprime "$ 23.4" (preço global * (1 - desconto global) * (1 + imposto personalizado))
