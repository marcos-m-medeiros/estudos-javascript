// Criando um objeto 'ferrari' com propriedades 'modelo' e 'velMax'
const ferrari = {
  modelo: "F40",
  velMax: 324,
};

// Criando um objeto 'volvo' com propriedades 'modelo' e 'velMax'
const volvo = {
  modelo: "V40",
  velMax: 200,
};

// Exibindo o protótipo (proto) do objeto 'ferrari'
console.log(ferrari.__proto__);

// Verificando se o protótipo do objeto 'ferrari' é o protótipo padrão do JavaScript (Object.prototype)
console.log(ferrari.__proto__ === Object.prototype);

// Verificando se o protótipo do objeto 'volvo' é o protótipo padrão do JavaScript (Object.prototype)
console.log(volvo.__proto__ === Object.prototype);

// Verificando se o protótipo do protótipo padrão do JavaScript (Object.prototype) é null
console.log(Object.prototype.__proto__ === null);

// Definindo uma função construtora vazia chamada 'MeuObjeto'
function MeuObjeto() {}

// Exibindo os tipos das funções 'Object' e 'MeuObjeto'
console.log(typeof Object, typeof MeuObjeto);

// Exibindo os protótipos das funções 'Object' e 'MeuObjeto'
console.log(Object.prototype, MeuObjeto.prototype);
