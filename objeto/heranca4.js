// Declarando uma função construtora vazia chamada 'MeuObjeto'
function MeuObjeto() {}

// Exibindo o protótipo da função construtora 'MeuObjeto'
console.log(MeuObjeto.prototype);

// Criando dois objetos 'obj1' e 'obj2' usando 'MeuObjeto' como construtor
const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

// Verificando se os objetos 'obj1' e 'obj2' compartilham o mesmo protótipo
console.log(obj1.__proto__ === obj2.__proto__);

// Verificando se o protótipo de 'MeuObjeto' é o mesmo que o protótipo de 'obj1'
console.log(MeuObjeto.prototype === obj1.__proto__);

// Adicionando propriedades 'nome' e 'falar' ao protótipo de 'MeuObjeto'
MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia, meu nome é ${this.nome}!`);
};

// Chamando o método 'falar' em 'obj1' (que herda o protótipo de 'MeuObjeto')
obj1.falar();

// Modificando a propriedade 'nome' em 'obj2' e chamando o método 'falar' nele
obj2.nome = "Rafael";
obj2.falar();

// Criando um objeto 'obj3' vazio e definindo seu protótipo como 'MeuObjeto.prototype'
obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";

// Chamando o método 'falar' em 'obj3' (que herda o protótipo de 'MeuObjeto')
obj3.falar();

// Resumindo algumas relações de protótipo
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); // true
console.log(MeuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
