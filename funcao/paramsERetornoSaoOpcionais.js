// Definindo uma função chamada 'area' que aceita dois parâmetros: altura e largura.
function area(altura, largura) {
  // Calcula a área multiplicando a altura pela largura.
  const area = altura * largura;

  // Verifica se a área calculada é maior que 20.
  if (area > 20) {
    // Se for maior que 20, exibe uma mensagem de erro no console.
    console.log(`Valor acima do permitido: ${area}m2`);
  } else {
    // Se a área for 20 ou menos, retorna a área calculada.
    return area;
  }
}

// Chama a função 'area' com diferentes conjuntos de argumentos e imprime o resultado no console.
console.log(area(2, 2)); // Imprime a área de 4, já que 2 * 2 = 4.
console.log(area(2)); // Imprime 'NaN' porque a largura não foi fornecida.
console.log(area()); // Imprime 'NaN' porque nenhum argumento foi fornecido.
console.log(area(2, 3, 17, 22, 44)); // Ignora os argumentos extras após os dois primeiros.
console.log(area(5, 5)); // Imprime a área de 25, já que 5 * 5 = 25.
