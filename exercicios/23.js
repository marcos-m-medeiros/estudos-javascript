// Esta função calcula a média ponderada das notas de um aluno
function media() {
  // Defina as notas e pesos das avaliações em arrays
  const notas = [10, 10, 10]; // Notas das avaliações
  const pesos = [4, 3, 3]; // Pesos correspondentes às avaliações

  // Encontre a maior nota entre as notas fornecidas
  let maiorNota = Math.max(...notas);

  // Calcule a nota final usando a fórmula da média ponderada
  const notaFinal = (
    (notas[0] * pesos[0] + notas[1] * pesos[1] + maiorNota * pesos[2]) /
    (pesos[0] + pesos[1] + pesos[2])
  ).toFixed(2); // Arredonda a nota final para duas casas decimais

  // Verifique se a nota final é maior ou igual a 5 para determinar se o aluno foi aprovado ou reprovado
  if (notaFinal >= 5) {
    console.log(`Nota Final: ${notaFinal}. Aprovado!`);
  } else {
    console.log(`Nota Final: ${notaFinal}. Reprovado!`);
  }
}

// Chame a função media para calcular e exibir a nota final
media();
