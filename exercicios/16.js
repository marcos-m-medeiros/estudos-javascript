// Defina uma função chamada calc que recebe dois números (n1 e n2) e um operando como argumentos.
let calc = (n1, n2, operando) => {
    // Use uma instrução switch para verificar o valor do operando.
    switch (operando) {
        case '+':
            console.log(n1 + n2); // Se o operando for '+', imprima a soma de n1 e n2.
            break;
        case '-':
            console.log(n1 - n2); // Se o operando for '-', imprima a subtração de n1 e n2.
            break;
        case '*':
            console.log(n1 * n2); // Se o operando for '*', imprima a multiplicação de n1 e n2.
            break;
        case '/':
            console.log(n1 / n2); // Se o operando for '/', imprima a divisão de n1 por n2.
            break;
        default:
            console.log('Operando inválido.'); // Se o operando não corresponder a nenhum dos casos anteriores, imprima uma mensagem de operando inválido.
            break;
    }
}

// Chame a função calc com números de exemplo (15 e 10) e um operando de exemplo ('*') para realizar uma multiplicação e imprimir o resultado.
calc(15, 10, '*');