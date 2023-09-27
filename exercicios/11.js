// Esta é a definição de uma função chamada 'bissexto' que aceita um parâmetro 'ano'.
function bissexto(ano) {
    // A primeira condição verifica se o ano não é divisível por 4.
    if (ano % 4 !== 0) {
        console.log(true); // Se a condição for verdadeira, exibe 'true' no console.
    } 
    // A segunda condição verifica se o ano não é divisível por 100.
    else if (ano % 100 != 0) {
        console.log(true); // Se a condição for verdadeira, exibe 'true' no console.
    } 
    // A terceira condição verifica se o ano é divisível por 400.
    else if (ano % 400 == 0) {
        console.log(true); // Se a condição for verdadeira, exibe 'true' no console.
    } 
    // Se nenhuma das condições acima for atendida, significa que o ano não é bissexto.
    else {
        console.log(false); // Nesse caso, exibe 'false' no console.
    }
}

// Chama a função 'bissexto' com o valor 5000 como argumento.
bissexto(5000);