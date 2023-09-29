// Definindo uma função construtora chamada "Pessoa"
function Pessoa() {
  // Inicializando a propriedade "idade" no objeto criado com o valor 0
  this.idade = 0;

  // Armazenando uma referência para o contexto atual (this) em uma variável chamada "self"
  const self = this;

  // Configurando um intervalo de 1 segundo (1000 milissegundos) para executar uma função anônima
  setInterval(
    function () {
      // Dentro da função anônima, acessamos a propriedade "idade" do objeto através de "self"
      self.idade++;
      console.log(self.idade);
    },
    1000 // O intervalo de tempo entre cada execução da função é de 1 segundo
  );
}

// Criando uma nova instância do construtor "Pessoa"
new Pessoa();
