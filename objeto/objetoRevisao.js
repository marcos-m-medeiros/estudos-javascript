// Coleção dinâmica de pares chave/valor

// Criando um objeto vazio chamado 'produto'.
const produto = new Object();

// Adicionando propriedades ao objeto 'produto'.
produto.nome = "Cadeira"; // Adicionando a propriedade 'nome'.
produto["marca do produto"] = "Genérica"; // Adicionando uma propriedade com nome de chave contendo espaço.
produto.preco = 220; // Adicionando a propriedade 'preco'.

// Exibindo o objeto 'produto' no console.
console.log(produto);

// Deletando propriedades do objeto 'produto'.
delete produto.preco; // Deletando a propriedade 'preco'.
delete produto["marca do produto"]; // Deletando a propriedade com nome de chave contendo espaço.
console.log(produto);

// Criando um objeto 'carro' com várias propriedades, incluindo objetos aninhados e um método.
const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Marcos",
    idade: 23,
    endereco: {
      logradouro: "Rua, ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Medeiros",
      idade: 19,
    },
    {
      nome: "Silva",
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    // ...
  },
};

// Modificando propriedades do objeto 'carro'.
carro.proprietario.endereco.numero = 1000; // Alterando o número do endereço.
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"; // Alterando o logradouro.

// Exibindo o objeto 'carro' no console.
console.log(carro);

// Deletando propriedades do objeto 'carro'.
delete carro.proprietario.endereco; // Deletando a propriedade 'endereco' do proprietário.
delete carro.calcularValorSeguro; // Deletando o método 'calcularValorSeguro'.

// Exibindo o objeto 'carro' após as deleções.
console.log(carro);

// Exibindo o array de condutores e seu comprimento.
console.log(carro.condutores); // Exibindo o array de condutores.
console.log(carro.condutores.length); // Exibindo o comprimento do array de condutores.
