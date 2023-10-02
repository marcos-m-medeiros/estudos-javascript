// Criando um objeto 'obj' com propriedades e um método
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    // O método 'soma' tenta acessar as variáveis 'a', 'b' e 'c', mas não as encontra.
    // Deve ser usado 'this' para referenciar as propriedades do próprio objeto.
    return a + b + c; // Isso não funciona corretamente.
  },
};

// Tentando usar JSON.stringify para converter o objeto em uma string JSON
console.log(JSON.stringify(obj)); // Erro devido à tentativa de serializar uma função no objeto.

// Formato JSON válido.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));
