// Cria um Array chamado 'pilotos' com quatro elementos
const pilotos = ["Vetel", "Alonso", "Raikkonen", "Massa"];

// Remove o último elemento do Array ('Massa')
pilotos.pop();
console.log(pilotos);

// Adiciona o piloto "Verstappen" ao final do Array
pilotos.push("Verstappen");
console.log(pilotos);

// Remove o primeiro elemento do Array ('Vetel')
pilotos.shift();
console.log(pilotos);

// Adiciona o piloto "Hamilton" ao início do Array
pilotos.unshift("Hamilton");
console.log(pilotos);

// Splice pode adicionar e remover elementos
// Adiciona os pilotos "Bottas" e "Massa" no índice 2 (entre 'Alonso' e 'Raikkonen')
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// Remove um elemento no índice 3 (remove 'Massa')
pilotos.splice(3, 1);
console.log(pilotos);

// Cria um novo Array 'algunsPilotos1' contendo elementos do índice 2 até o final
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// Cria um novo Array 'algunsPilotos2' contendo elementos do índice 1 até 4 (excluindo o elemento no índice 4)
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
