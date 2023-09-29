// Definindo uma função construtora chamada Carro com parâmetros padrão
function Carro(velocidadeMaxima = 200, delta = 5) {
  // Atributo privado para armazenar a velocidade atual do carro
  let velocidadeAtual = 0;

  // Método público para acelerar o carro
  this.acelerar = function () {
    // Verifica se a velocidade atual mais o delta não excede a velocidade máxima
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      // Aumenta a velocidade atual pelo valor de delta
      velocidadeAtual += delta;
    } else {
      // Se exceder a velocidade máxima, define a velocidade atual como a velocidade máxima
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // Método público para obter a velocidade atual do carro
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

// Cria uma instância do carro chamada uno usando os valores padrão
const uno = new Carro();
uno.acelerar(); // Acelera o uno
console.log(uno.getVelocidadeAtual()); // Exibe a velocidade atual do uno

// Cria uma instância do carro chamada ferrari com velocidade máxima de 350 e delta de 20
const ferrari = new Carro(350, 20);
ferrari.acelerar(); // Acelera a ferrari
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); // Exibe a velocidade atual da ferrari

// Exibe o tipo de objeto Carro
console.log(typeof Carro);
// Exibe o tipo de objeto ferrari
console.log(typeof ferrari);
