// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  // Usando operador lógico '||' para atribuir 1 como valor padrão se os argumentos forem falsy (undefined, null, 0, etc.).
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1()); // Resultado: 3, pois todos os argumentos são undefined, então são substituídos por 1.
console.log(soma1(3)); // Resultado: 5, pois 'a' é 3 e 'b' e 'c' são substituídos por 1.
console.log(soma1(1, 2, 3)); // Resultado: 6, pois todos os argumentos são definidos.
console.log(soma1(0, 0, 0)); // Resultado: 3, o que pode ser inesperado, pois 0 é substituído por 1.

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  // Usando o operador ternário para verificar se 'a' é undefined e, se for, atribuir 1.
  a = a !== undefined ? a : 1;
  // Usando o operador 'in' para verificar se o argumento 'b' está presente e, se não estiver, atribuir 1.
  b = 1 in arguments ? b : 1;
  // Usando isNaN para verificar se 'c' não é um número e, se não for, atribuir 1.
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2()); // Resultado: 3, pois todos os argumentos são undefined, então são substituídos por 1.
console.log(soma2(3)); // Resultado: 5, pois 'a' é 3 e 'b' e 'c' são substituídos por 1.
console.log(soma2(1, 2, 3)); // Resultado: 6, pois todos os argumentos são definidos.
console.log(soma2(0, 0, 0)); // Resultado: 0, agora 0 é tratado corretamente.

// Valor padrão do ES2015 (Estratégia 5)
function soma3(a = 1, b = 1, c = 1) {
  // O valor padrão é definido diretamente na lista de parâmetros da função.
  return a + b + c;
}

console.log(soma3()); // Resultado: 3, pois todos os argumentos são undefined, então são substituídos por 1.
console.log(soma3(3)); // Resultado: 5, pois 'a' é 3 e 'b' e 'c' são substituídos por 1.
console.log(soma3(1, 2, 3)); // Resultado: 6, pois todos os argumentos são definidos.
console.log(soma3(0, 0, 0)); // Resultado: 0, agora 0 é tratado corretamente.
