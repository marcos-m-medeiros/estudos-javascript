// Imprime os tipos de Array e instâncias de Array vazias
console.log(typeof Array, typeof new Array(), typeof []);

// Cria um Array chamado 'aprovados' com elementos
let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

// Outra forma de criar um Array, chamado 'aprovados', com elementos
aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]); // Imprime o primeiro elemento do Array
console.log(aprovados[1]); // Imprime o segundo elemento do Array
console.log(aprovados[2]); // Imprime o terceiro elemento do Array
console.log(aprovados[3]); // Imprime 'undefined' porque não há um quarto elemento

// Modifica o quarto elemento do Array e adiciona um novo elemento ao final
aprovados[3] = "Paulo";
aprovados.push("Abia");
console.log(aprovados.length); // Imprime o número de elementos no Array

// Adiciona um elemento no índice 9 do Array
aprovados[9] = "Rafael";
console.log(aprovados.length); // Imprime o número de elementos no Array (10)
console.log(aprovados[8] === undefined); // Verifica se o nono elemento é 'undefined'

console.log(aprovados); // Imprime o Array completo
aprovados.sort(); // Ordena o Array em ordem alfabética
console.log(aprovados); // Imprime o Array ordenado

// Deleta o elemento no índice 1 do Array
delete aprovados[1];
console.log(aprovados[1]); // Imprime 'undefined' porque o elemento foi deletado
console.log(aprovados[2]); // Imprime o terceiro elemento restante do Array

// Cria um novo Array 'aprovados' e remove o elemento no índice 1
aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1);
console.log(aprovados); // Imprime o Array com o segundo elemento removido
