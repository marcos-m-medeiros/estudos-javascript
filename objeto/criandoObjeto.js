// Usando a notação literal para criar um objeto vazio
const obj1 = {};
console.log(obj1);

// Utilizando a função construtora Object para criar um objeto vazio
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Criando uma função construtora Produto para criar objetos de produtos
function Produto(nome, preco, desc) {
  // Definindo propriedades no objeto usando "this"
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Notebook", 2998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Usando uma função factory para criar objetos de funcionários
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario("Marcos", 7980, 4);
const f2 = criarFuncionario("Medeiros", 11400, 1);

console.log(f1.getSalario());
console.log(f2.getSalario());

// Usando Object.create para criar um objeto vazio sem protótipo
const filho = Object.create(null);
filho.nome = "Marcos";
console.log(filho);

// Exemplo de criação de objeto a partir de uma string JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
