// Criando um objeto 'pai' com propriedades 'nome' e 'corCabelo'
const pai = {
  nome: "Pedro",
  corCabelo: "Preto",
};

// Criando um objeto 'filha1' que herda de 'pai' usando Object.create
filha1 = Object.create(pai);
filha1.nome = "Ana"; // Definindo uma nova propriedade 'nome' em 'filha1'

console.log(filha1.corCabelo); // Exibindo a propriedade 'corCabelo' de 'pai', que 'filha1' herda

// Criando um objeto 'filha2' que herda de 'pai' e define propriedades adicionais com configurações específicas
const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true }, // Definindo 'nome' como não gravável e enumerável
});

console.log(filha2.nome); // Exibindo a propriedade 'nome' de 'filha2'

// Tentando modificar a propriedade 'nome' de 'filha2' (não é permitido devido a writable: false)
filha2.nome = "Carla";

// Exibindo o nome de 'filha2' após a tentativa de modificação
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // A propriedade 'nome' permanece "Bia"

// Exibindo as chaves (propriedades próprias) de 'filha1' e 'filha2'
console.log(Object.keys(filha1)); // 'nome'
console.log(Object.keys(filha2)); // 'nome'

// Iterando sobre as propriedades de 'filha2' e verificando se são próprias ou herdadas
for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key) // Propriedades próprias
    : console.log(`Por herança: ${key}`); // Propriedades herdadas
}
