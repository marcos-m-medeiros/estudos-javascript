// Define uma função chamada jurosSimples que calcula juros simples com base no capital inicial, taxa de juros e tempo de aplicação.
function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  const juros = capitalInicial * taxaJuros * tempoAplicacao; // Calcula os juros simples.
  return juros; // Retorna o valor dos juros.
}

// Chama a função jurosSimples com valores de exemplo (capital, taxa de juros e tempo) e formata o resultado em moeda brasileira.
console.log(
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(jurosSimples(1200, 0.02, 15))
);

// Define uma função chamada jurosCompostos que calcula juros compostos com base no capital inicial, taxa de juros e tempo de investimento.
function jurosCompostos(capital, taxaJuros, tempoInvestido) {
  const resultado = capital * Math.pow(1 + taxaJuros, tempoInvestido); // Calcula o resultado dos juros compostos.
  return resultado; // Retorna o resultado dos juros compostos.
}

// Chama a função jurosCompostos com valores de exemplo (capital, taxa de juros e tempo) e formata o resultado em moeda brasileira.
console.log(
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(jurosCompostos(2000, 0.02, 6))
);