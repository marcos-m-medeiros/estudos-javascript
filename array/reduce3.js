// Definindo um novo método 'reduce2' para o protótipo da classe Array.
Array.prototype.reduce2 = function (callback, valorInicial) {
  // Define o índice inicial com base na presença ou ausência de um 'valorInicial'.
  const indiceInicial = valorInicial ? 0 : 1;

  // Inicializa o acumulador com o 'valorInicial' ou o primeiro elemento do array.
  let acumulador = valorInicial || this[0];

  // Itera pelos elementos do array, começando do índice inicial.
  for (let i = indiceInicial; i < this.length; i++) {
    // Chama a função 'callback' passando o acumulador atual, o elemento atual, o índice e o próprio array.
    acumulador = callback(acumulador, this[i], i, this);
  }

  // Retorna o valor final do acumulador após a iteração.
  return acumulador;
};

// Define uma função 'soma' que recebe dois valores e retorna a soma deles.
const soma = (total, valor) => total + valor;

// Define um array 'nums' com números.
const nums = [1, 2, 3, 4, 5, 6];

// Utiliza o método 'reduce2' personalizado para somar os valores do array 'nums' começando com um valor inicial de 21.
console.log(nums.reduce2(soma, 21));
