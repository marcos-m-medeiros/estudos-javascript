// Define uma função chamada triangle que recebe três números (n1, n2 e n3) representando os lados de um triângulo.
function triangle(n1, n2, n3) {
  // Verifica se todos os lados são iguais, o que significa que o triângulo é equilátero.
  if (n1 == n2 && n1 == n3 && n2 == n1 && n2 == n3 && n3 == n1 && n3 == n2) {
    console.log("Equilátero"); // Se todos os lados forem iguais, imprime "Equilátero".
  }
  // Verifica se pelo menos dois lados são iguais, o que significa que o triângulo é isósceles.
  else if (
    n1 == n2 ||
    n1 == n3 ||
    n2 == n1 ||
    n2 == n3 ||
    n3 == n1 ||
    n3 == n2
  ) {
    console.log("Isósceles"); // Se pelo menos dois lados forem iguais, imprime "Isósceles".
  }
  // Se nenhum dos casos anteriores for verdadeiro, o triângulo é escaleno.
  else {
    console.log("Escaleno"); // Se nenhum dos lados for igual, imprime "Escaleno".
  }
}

// Chama a função triangle com valores de exemplo (todos iguais a 1) para determinar o tipo de triângulo.
triangle(1, 1, 1);