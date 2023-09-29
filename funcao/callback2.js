// Declaração do array de notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];

// Percorre o array de notas usando um loop "for...in"
for (let i in notas) {
  // Verifica se a nota atual é menor que 7
  if (notas[i] < 7) {
    // Se for menor que 7, adiciona a nota ao array "notasBaixas1"
    notasBaixas1.push(notas[i]);
  }
}

// Exibe as notas baixas encontradas
console.log(notasBaixas1);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  // Usa a função "filter" para criar um novo array contendo apenas as notas menores que 7
  return nota < 7;
});

// Exibe as notas baixas encontradas usando a função "filter"
console.log(notasBaixas2);

// Arrow Function
const notasMenorQue7 = (nota) => nota < 7;

// Usa a função "filter" novamente com uma arrow function para criar um novo array de notas baixas
const notasBaixas3 = notas.filter(notasMenorQue7);

// Exibe as notas baixas encontradas usando a arrow function
console.log(notasBaixas3);
