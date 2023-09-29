// Definindo uma função construtora chamada 'Criarpessoa' que recebe o parâmetro 'pessoa'
function Criarpessoa(pessoa) {
  // Atribuindo o valor do parâmetro 'pessoa' à propriedade 'pessoa' do objeto criado com 'new'
  this.pessoa = pessoa;

  // Definindo um método chamado 'falar' no objeto criado
  this.falar = function () {
    // Este método imprime uma mensagem com o nome da pessoa no console
    console.log(`Meu nome é ${this.pessoa}.`);
  };
}

// Criando uma instância da função construtora 'Criarpessoa' com o nome "Marcos" e atribuindo-a à variável 'pessoa1'
const pessoa1 = new Criarpessoa("Marcos");

// Chamando o método 'falar' da instância 'pessoa1', que imprime "Meu nome é Marcos" no console
pessoa1.falar();
