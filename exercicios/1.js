// Declaração de variáveis para armazenar números e um resultado (res).
let n1; // Variável para o primeiro número (não inicializada aqui).
let n2; // Variável para o segundo número (não inicializada aqui).
let res; // Variável para armazenar um resultado (não utilizada neste código).

// Definição de uma função chamada 'calc' que aceita dois parâmetros: 'n1' e 'n2'.
function calc(n1, n2) {
  // Dentro da função, quatro variáveis locais (sum, sub, mul e div) são criadas para armazenar resultados de operações.
  const sum = n1 + n2; // Calcula a soma de n1 e n2.
  const sub = n1 - n2; // Calcula a subtração de n1 por n2.
  const mul = n1 * n2; // Calcula a multiplicação de n1 por n2.
  const div = n1 / n2; // Calcula a divisão de n1 por n2.

  // Exibe no console uma mensagem que inclui os resultados das operações.
  console.log(
    `Sum: ${sum} Subtraction: ${sub} Multiplication: ${mul} Divided: ${div}`
  );
}

// Chama a função 'calc' com os valores 10 e 10 como argumentos.
calc(10, 10);