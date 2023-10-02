// Utilizando Object.preventExtensions para criar um objeto 'produto' que não pode ser estendido
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
});

// Verificando se o objeto 'produto' é extensível
console.log("Extensível:", Object.isExtensible(produto)); // false

// Modificando propriedades do objeto 'produto' (é permitido)
produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";

// Deletando uma propriedade do objeto 'produto' (é permitido)
delete produto.tag;

// Exibindo o objeto 'produto' após as modificações
console.log(produto);

// Utilizando Object.seal para criar um objeto 'pessoa' que não pode ser estendido ou ter propriedades deletadas
const pessoa = {
  nome: "Juliana",
  idade: 35,
};

Object.seal(pessoa);

// Verificando se o objeto 'pessoa' está selado
console.log("Selado:", Object.isSealed(pessoa)); // true

// Tentando adicionar uma propriedade ao objeto 'pessoa' (não é permitido)
pessoa.sobrenome = "Silva";

// Tentando deletar uma propriedade do objeto 'pessoa' (não é permitido)
delete pessoa.nome;

// Modificando uma propriedade existente do objeto 'pessoa' (é permitido)
pessoa.idade = 29;

// Exibindo o objeto 'pessoa' após as tentativas de modificação
console.log(pessoa);

// Object.freeze combina as restrições de selamento com valores constantes (não mostrado neste código)
