// IIFE -> Immediately Invoked Function Expression
// (Função Invocada Imediatamente)

// Definindo uma função anônima dentro de parênteses () e, em seguida, imediatamente invocando-a com ()
(function () {
  // Este código será executado assim que o interpretador alcançar este ponto

  // Imprimindo uma mensagem no console
  console.log("Será executado na hora!");

  // Imprimindo outra mensagem no console
  console.log("Foge do escopo mais abrangente!");
})();

// O código acima define e invoca uma IIFE, que é uma função anônima que é executada imediatamente após a sua definição.
// Isso é útil para isolar variáveis e funções do escopo global, evitando colisões de nomes e protegendo o escopo.
