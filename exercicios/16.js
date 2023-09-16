/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

let calc = (n1, n2, operando) => {
    switch (operando) {
        case '+':
            console.log(n1 + n2)
            break
        case '-':
            console.log(n1 - n2)
            break
        case '*':
            console.log(n1 * n2)
            break
        case '/':
            console.log(n1 / n2)
            break
        default:
            console.log('Operando inválido.')
            break
    }
}

calc(15, 10, '*')