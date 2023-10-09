// Definindo um array chamado 'escola' que contém informações sobre turmas e alunos
const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

// Definindo funções que serão usadas posteriormente
const getNotaDoAluno = (aluno) => aluno.nota; // Retorna a nota de um aluno
const getNotasDaTuma = (turma) => turma.alunos.map(getNotaDoAluno); // Retorna um array de notas de uma turma

// Usando a função 'map' para criar um novo array 'notas1' com as notas de cada turma
const notas1 = escola.map(getNotasDaTuma);
console.log(notas1);

// Adicionando uma função 'flatMap' ao protótipo de Array
Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

// Usando a função 'flatMap' para criar um novo array 'notas2' com todas as notas de todas as turmas
const notas2 = escola.flatMap(getNotasDaTuma);
console.log(notas2);
