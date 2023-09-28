// Define uma função chamada exponenciacao que recebe dois argumentos: base e expoente.
function exponenciacao(base, expoente) {
  // Use a função Math.pow para calcular a potência da base elevada ao expoente.
  // Isso calcula base^expoente e retorna o resultado.
  return Math.pow(base, expoente);
}

// Chama a função exponenciacao com valores de exemplo (base = 4, expoente = 3) e imprime o resultado no console.
console.log(exponenciacao(4, 3));