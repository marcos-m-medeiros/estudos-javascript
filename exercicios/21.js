// Defina um valor fixo para o plano de saúde.
let fixo = 100;

// Variável para armazenar o valor total do plano.
let total;

// Crie um objeto de formatação de número para formatar valores em moeda brasileira (BRL).
let brl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

// Crie uma função chamada planoSaude que calcula o custo do plano com base na idade.
planoSaude = (age) => {
    if (age <= 10) {
        total = fixo + 80;
    } else if (age > 10 && age <= 30) {
        total = fixo + 50;
    } else if (age > 30 && age <= 60) {
        total = fixo + 95;
    } else {
        total = fixo + 130;
    }
    
    // Formate o valor total em BRL e retorne uma string com o resultado.
    return `Total: ${brl.format(total)}.`;
}

// Chame a função planoSaude com uma idade de exemplo (30) e imprima o resultado no console.
console.log(planoSaude(30));