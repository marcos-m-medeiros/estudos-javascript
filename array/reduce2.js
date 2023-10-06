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

// Desafio 1: Todos os alunos são bolsistas?

// Definindo uma função 'todosBolsistas' que verifica se todos os elementos no array são verdadeiros (bolsistas).
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

// Usando o método 'map' para criar um novo array contendo apenas informações sobre se cada aluno é bolsista ou não.
// Em seguida, usa 'reduce' com a função 'todosBolsistas' para verificar se todos os alunos são bolsistas.
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?

// Definindo uma função 'algumBolsista' que verifica se pelo menos um elemento no array é verdadeiro (bolsista).
const algumBolsista = (resultado, bolsista) => resultado || bolsista;

// Usando o método 'map' para criar um novo array contendo apenas informações sobre se cada aluno é bolsista ou não.
// Em seguida, usa 'reduce' com a função 'algumBolsista' para verificar se pelo menos um aluno é bolsista.
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));
