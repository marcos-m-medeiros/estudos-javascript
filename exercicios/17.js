/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

let salario = 1000

const plano = {
    a: 10,
    b: 15,
    c: 20
}

let brlBR = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

let aumento = (novoSalario) => {

    console.log('Você pode apenas escolher um plano de trabalho. A = 10%, B = 15%, C = 20%.')

    switch (novoSalario.toLowerCase()) {
        case 'a':
            novoSalario = (plano.a / 100) * salario
            console.log(`Você seleicou o PLANO A: 10%. \n\nSeu novo salário: ${brlBR.format(novoSalario + salario)}.`)
            break
        case 'b':
            novoSalario = (plano.b / 100) * salario
            console.log(`Você selecionou o PLANO B: 15%. \n\nSeu novo salário: ${brlBR.format(novoSalario + salario)}.`)
            break
        case 'c':
            novoSalario = (plano.c / 100) * salario
            console.log(`Você selecionou o PLANO C: 20%. \n\nSeu novo salário: ${brlBR.format(novoSalario + salario)}.`)
            break
        default:
            if (novoSalario == '') {
                console.log('Você não digitou o seu plano de trabalho.')
            } else {
                console.log('Plano inválido. Você digitou: ' + novoSalario)
            }
    }
}

aumento('c')