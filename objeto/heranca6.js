// Definindo uma função construtora 'Aula' com parâmetros 'nome' e 'videoID'
function Aula(nome, videoID) {
  // Atribuindo valores aos membros do objeto criado usando 'this'
  this.nome = nome;
  this.videoID = videoID;
}

// Criando instâncias 'aula1' e 'aula2' da função construtora 'Aula'
const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até Breve", 456);

// Exibindo as instâncias 'aula1' e 'aula2'
console.log(aula1, aula2);

// Definindo uma função 'novo' que simula o comportamento do operador 'new'
function novo(f, ...params) {
  // Criando um objeto vazio 'obj'
  const obj = {};

  // Configurando o protótipo do 'obj' para o protótipo da função construtora 'f'
  obj.__proto__ = f.prototype;

  // Chamando a função construtora 'f' com o objeto 'obj' como contexto ('this')
  f.apply(obj, params);

  // Retornando o objeto 'obj' criado
  return obj;
}

// Criando instâncias 'aula3' e 'aula4' usando a função 'novo' para simular o operador 'new'
const aula3 = novo(Aula, "Bem Vindo", 123);
const aula4 = novo(Aula, "Até Breve", 456);

// Exibindo as instâncias 'aula3' e 'aula4'
console.log(aula3, aula4);
