// Esta é a definição de uma função chamada 'div' que aceita um parâmetro 'num'.
function div(num) {
    // Dentro da função, verifica se o valor de 'num' é divisível por 3 (ou seja, se o resto da divisão de 'num' por 3 é igual a 0).
    if (num % 3 == 0) {
        // Se o valor de 'num' for divisível por 3, a condição é verdadeira, então o código dentro deste bloco é executado.
        console.log(true); // Exibe 'true' no console.
    } else {
        // Se o valor de 'num' não for divisível por 3, a condição é falsa, então o código dentro deste bloco é executado.
        console.log(false); // Exibe 'false' no console.
    }
}

// Chama a função 'div' com o valor 18 como argumento.
div(18);