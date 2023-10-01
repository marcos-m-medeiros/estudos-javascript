// Criando um objeto chamado 'pessoa' com algumas propriedades
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

// Exibindo as chaves (nomes das propriedades) do objeto 'pessoa'
console.log(Object.keys(pessoa));

// Exibindo os valores das propriedades do objeto 'pessoa'
console.log(Object.values(pessoa));

// Exibindo entradas (chave-valor) do objeto 'pessoa' como pares de arrays
console.log(Object.entries(pessoa));

// Iterando sobre as entradas do objeto 'pessoa' e exibindo-as no formato "chave: valor"
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Definindo uma nova propriedade 'dataNascimento' no objeto 'pessoa' usando Object.defineProperty
// A propriedade é configurada como enumerável (pode ser listada), mas não pode ser modificada (não é gravável)
pessoa.dataNascimento = "01/01/2022"; // Isso não terá efeito porque a propriedade é somente leitura
console.log(pessoa.dataNascimento);

// Exibindo as chaves do objeto 'pessoa', incluindo a nova propriedade 'dataNascimento'
console.log(Object.keys(pessoa));

// Criando objetos 'dest', 'o1' e 'o2' e usando Object.assign para combinar seus valores no objeto 'obj'
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // Os valores são combinados em 'dest'

// Congelando o objeto 'obj', tornando-o imutável
Object.freeze(obj);

// Tentando modificar a propriedade 'c' do objeto 'obj' após congelá-lo
obj.c = 1234; // Isso não terá efeito devido ao congelamento

// Exibindo o objeto 'obj' após o congelamento
console.log(obj);
