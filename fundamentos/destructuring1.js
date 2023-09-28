// Criando um objeto 'pessoa' com várias propriedades
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereço: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

// Extraindo as propriedades 'nome' e 'idade' do objeto 'pessoa'
const { nome, idade } = pessoa;
console.log(nome, idade);

// Extraindo as propriedades 'nome' e 'idade' com nomes diferentes usando aliases 'n' e 'i'
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Tentando extrair propriedades inexistentes ('sobrenome' e 'bemHumorada') com valores padrão
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Extraindo propriedades aninhadas do objeto 'endereço' dentro de 'pessoa'
const {
  endereço: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);

// Tentando extrair propriedades aninhadas que não existem ('conta') - Isso causará um erro
console.log(ag, num);
