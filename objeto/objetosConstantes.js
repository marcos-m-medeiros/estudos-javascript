// Criando um objeto chamado "pessoa" com uma propriedade "nome" inicializada com "João"
const pessoa = {
  nome: "João",
};

// Modificando a propriedade "nome" do objeto "pessoa" para "Pedro"
pessoa.nome = "Pedro";

// Imprimindo o objeto "pessoa" no console
console.log(pessoa);

// Congelando o objeto "pessoa", tornando-o imutável
Object.freeze(pessoa);

// Tentando modificar a propriedade "nome" do objeto congelado (não deve funcionar)
pessoa.nome = "Maria";

// Tentando adicionar uma nova propriedade "endereco" ao objeto congelado (não deve funcionar)
pessoa.endereco = "Rua ABC";

// Tentando excluir a propriedade "nome" do objeto congelado (não deve funcionar)
delete pessoa.nome;

// Tentando imprimir a propriedade "nome" do objeto congelado (deve ser undefined)
console.log(pessoa.nome);

// Imprimindo o objeto "pessoa" no console (deve continuar o mesmo)
console.log(pessoa);

// Criando um objeto chamado "pessoaConstante" e congelando-o imediatamente
const pessoaConstante = Object.freeze({ nome: "João" });

// Tentando modificar a propriedade "nome" do objeto congelado (não deve funcionar)
pessoaConstante.nome = "Maria";

// Imprimindo o objeto "pessoaConstante" no console (deve continuar o mesmo)
console.log(pessoaConstante);
