// Define uma função chamada comparaComThis que verifica se 'this' é estritamente igual a 'param'
let comparaComThis = function (param) {
  console.log(this === param);
};

// Chama comparaComThis com 'global' como contexto, o que resultará em 'false' porque 'this' não é igual a 'global'
comparaComThis(global);

// Cria um objeto vazio 'obj'
const obj = {};

// Usa a função 'bind' para associar 'obj' como o contexto de 'comparaComThis'
comparaComThis = comparaComThis.bind(obj);

// Chama comparaComThis com 'global' como contexto, o que resultará em 'false' porque 'this' agora é igual a 'obj', não a 'global'
comparaComThis(global);

// Chama comparaComThis com 'obj' como contexto, o que resultará em 'true' porque 'this' é igual a 'obj'
comparaComThis(obj);

// Define uma função de seta chamada comparaComThisArrow que verifica se 'this' é estritamente igual a 'param'
let comparaComThisArrow = (param) => console.log(this === param);

// Chama comparaComThisArrow com 'global' como contexto, o que resultará em 'true' porque 'this' em funções de seta se refere ao contexto em que a função foi definida (geralmente 'global' no navegador)
comparaComThisArrow(global);

// Chama comparaComThisArrow com 'module.exports' como contexto, o que resultará em 'true' pelo mesmo motivo acima
comparaComThisArrow(module.exports);

// Usa a função 'bind' em uma função de seta não tem efeito, 'this' ainda se refere ao contexto léxico (onde a função de seta foi definida)
comparaComThisArrow = comparaComThisArrow.bind(obj);

// Chama comparaComThisArrow com 'obj' como contexto, mas 'this' ainda será igual ao contexto léxico, não a 'obj', então resultará em 'true'
comparaComThisArrow(obj);

// Chama comparaComThisArrow com 'module.exports' como contexto, que ainda resultará em 'true' pelo mesmo motivo acima
comparaComThisArrow(module.exports);
