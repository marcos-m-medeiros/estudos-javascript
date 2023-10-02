// Aqui estamos adicionando um novo método 'forEach2' ao protótipo do objeto Array.
// Esse método permite iterar sobre elementos de um array e chamar uma função de retorno (callback) para cada elemento.
Array.prototype.forEach2 = function (callback) {
  // Usamos um loop 'for' para percorrer todos os elementos do array.
  for (let i = 0; i < this.length; i++) {
    // Chamamos a função de retorno 'callback' com três argumentos:
    // 1. O elemento atual do array (this[i])
    // 2. O índice do elemento (i)
    // 3. O próprio array (this)
    callback(this[i], i, this);
  }
};

// Criamos um array chamado 'aprovados' com alguns nomes.
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// Usamos o método 'forEach2' que definimos anteriormente para iterar sobre o array 'aprovados'.
aprovados.forEach2(function (nome, indice) {
  // Dentro do loop, para cada nome e índice, imprimimos uma mensagem no console.
  console.log(`${indice + 1}) ${nome}`);
});
