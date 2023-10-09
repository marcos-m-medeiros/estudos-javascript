// Definição de um array de objetos chamado "alunos" com informações sobre alunos.
const alunos = [
  {
    nome: "João",
    nota: 7.9,
  },
  {
    nome: "Maria",
    nota: 9.2,
  },
];

// Imperativo:
// Inicializa uma variável "total1" para armazenar a soma das notas.
let total1 = 0;
// Loop "for" que itera pelos alunos e acumula as notas na variável "total1".
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
// Calcula a média das notas e imprime no console.
console.log(total1 / alunos.length);

// Declarativo:
// Define uma função "getNota" que recebe um aluno e retorna a sua nota.
const getNota = (aluno) => aluno.nota;
// Define uma função "soma" que recebe dois valores e retorna a soma deles.
const soma = (total, atual) => total + atual;
// Utiliza as funções "map" e "reduce" para calcular a soma das notas de forma declarativa.
const total2 = alunos.map(getNota).reduce(soma);
// Calcula a média das notas e imprime no console.
console.log(total2 / alunos.length);
