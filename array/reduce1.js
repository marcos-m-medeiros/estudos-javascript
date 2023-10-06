// Definindo um array 'alunos' com objetos representando informações sobre estudantes.
const alunos = [
  {
    nome: "João",
    nota: 7.3,
    bolsista: false,
  },
  {
    nome: "Maria",
    nota: 9.2,
    bolsista: true,
  },
  {
    nome: "Pedro",
    nota: 9.8,
    bolsista: false,
  },
  {
    nome: "Ana",
    nota: 8.7,
    bolsista: true,
  },
];

// Usando o método 'map' para criar um novo array com as notas dos alunos.
console.log(alunos.map((a) => a.nota));

// Usando 'map' seguido de 'reduce' para calcular a soma das notas dos alunos.
const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    // Exibindo os valores do acumulador e do elemento atual a cada passo da redução.
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

// Exibindo o resultado da soma das notas.
console.log(resultado);
