let a = 3; // Declaração de uma variável local 'a' com o valor 3.

global.b = 123; // Definindo uma propriedade 'b' no objeto global com o valor 123.
this.c = 456; // Definindo uma propriedade 'c' no objeto 'this' (geralmente, o objeto global) com o valor 456.
this.d = false; // Redefinindo a propriedade 'd' no objeto 'this' com o valor 'false'.
this.d = "teste"; // Mais uma vez, redefinindo a propriedade 'd' no objeto 'this' com o valor 'teste'.

console.log(this.a); // Tentando acessar a variável 'a' no objeto 'this', que não existe. Isso resultará em 'undefined'.
console.log(global.b); // Acessando a propriedade 'b' no objeto global, que foi definida anteriormente como 123.
console.log(this.c); // Acessando a propriedade 'c' no objeto 'this', que foi definida anteriormente como 456.
console.log(module.exports.c); // Tentando acessar a propriedade 'c' no objeto 'module.exports', que não foi definida. Isso resultará em 'undefined'.
console.log(module.exports === this); // Verificando se 'module.exports' é estritamente igual ao objeto 'this'. Isso geralmente resultará em 'false', a menos que você tenha definido 'module.exports' para ser o mesmo objeto 'this'.
console.log(module.exports); // Imprimindo o objeto 'module.exports'.

abc = 3; // Definindo uma variável global 'abc' com o valor 3.
console.log(global.abc); // Acessando a variável global 'abc', que foi definida anteriormente como 3.

/* 
   O código a seguir está comentado, mas se for descomentado, irá substituir o objeto 'module.exports' por um novo objeto com três propriedades: 'e', 'f' e 'g'. Isso substituirá o que quer que estivesse em 'module.exports' anteriormente.
   
   module.exports = {
       e: 456,
       f: false,
       g: 'teste'
   }
*/
