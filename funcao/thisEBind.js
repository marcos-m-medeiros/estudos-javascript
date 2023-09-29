// Criando um objeto chamado "pessoa" com uma propriedade "saudacao" e um método "falar"
const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

// Chamando o método "falar" do objeto "pessoa", que imprime a saudação
pessoa.falar();

// Criando uma variável "falar" e atribuindo a ela a função "pessoa.falar"
const falar = pessoa.falar;

// Tentando chamar a função "falar" armazenada na variável "falar", mas isso resultará em um erro
falar(); // Conflito entre paradigmas: funcional e OO

// Usando o método "bind" para criar uma nova função "falarDePessoa" vinculada ao objeto "pessoa"
const falarDePessoa = pessoa.falar.bind(pessoa);

// Chamando a função "falarDePessoa", que imprimirá a saudação do objeto "pessoa"
falarDePessoa();
