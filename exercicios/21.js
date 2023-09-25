/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

let fixo = 100
let total
let brl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

planoSaude = (age) => {
    if (age <= 10) {
        total = fixo + 80
    } else if (age > 10 && age <= 30) {
        total = fixo + 50
    } else if (age > 30 && age <= 60) {
        total = fixo + 95
    } else {
        total = fixo + 130
    }
    return `Total: ${brl.format(total)}.`
}

console.log(planoSaude(30))