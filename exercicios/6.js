function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    const juros = capitalInicial * taxaJuros * tempoAplicacao
    return juros
}

console.log(new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(jurosSimples(1200, 0.02, 15)))

function jurosCompostos(capital, taxaJuros, tempoInvestido) {
    const resultado = capital * Math.pow((1 + taxaJuros), tempoInvestido)
    return resultado
}

console.log(new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(jurosCompostos(2000, 0.02, 6)))