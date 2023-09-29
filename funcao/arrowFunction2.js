// Define uma função construtora chamada 'Pessoa'.
function Pessoa() {
  // Dentro do construtor, define uma propriedade 'idade' no objeto 'this' e a inicializa com o valor 0.
  this.idade = 0;

  // Define um intervalo de tempo que irá executar uma função a cada 1000 milissegundos (1 segundo).
  setInterval(() => {
    // Dentro da função do intervalo, incrementa a propriedade 'idade' do objeto 'this' em 1.
    this.idade++;

    // Imprime a 'idade' atual no console.
    console.log(this.idade);
  }, 1000);
}

// Cria uma nova instância da função construtora 'Pessoa'. Isso inicia o processo de incremento da idade.
new Pessoa();
