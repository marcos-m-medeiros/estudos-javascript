// Definindo uma classe chamada 'Pessoa'
class Pessoa {
  // O construtor da classe recebe o parâmetro 'nome' e define a propriedade 'nome' do objeto criado
  constructor(nome) {
    this.nome = nome;
  }

  // Definindo um método chamado 'falar' que imprime uma mensagem com o nome da pessoa no console
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

// Criando uma instância da classe 'Pessoa' com o nome "João" e atribuindo-a à variável 'p1'
const p1 = new Pessoa("João");

// Chamando o método 'falar' da instância 'p1', que imprime "Meu nome é João" no console
p1.falar();

// Definindo uma função de criação de objeto chamada 'criarPessoa' que recebe o parâmetro 'nome'
const criarPessoa = (nome) => {
  // A função retorna um objeto com um método 'falar' que imprime a mensagem com o nome no console
  return {
    falar: console.log(`Meu nome é ${nome}`),
  };
};

// Chamando a função 'criarPessoa' para criar um objeto que representa uma pessoa com nome "João"
const p2 = criarPessoa("João");

// O objeto 'p2' possui um método 'falar' que imprime "Meu nome é João" no console
p2.falar();
