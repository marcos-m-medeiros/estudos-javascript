// Função calcular recebe o mês e um valor de anuidade (com valor padrão de 100).
function calcular(mes, anuidade = 100) {
  // Verifica se o mês está dentro do intervalo válido (1 a 12).
  if (mes < 1 || mes > 12) {
    // Se não estiver, imprime "Mês inválido." e retorna.
    return console.log("Mês inválido.");
  }

  // Inicializa a variável valorMensal com o valor da anuidade.
  let valorMensal = anuidade;

  // Cria um objeto de formatação de moeda para BRL (Real Brasileiro).
  let brl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Calcula o valor mensal com juros compostos para cada mês até o mês especificado.
  for (let i = 1; i < mes; i++) {
    valorMensal = valorMensal * 0.5; // Adiciona 5% de juros compostos
  }

  // Obtém o nome do mês com base no número do mês usando a função obterNomeMes.
  // Em seguida, imprime o valor a ser pago formatado como moeda brasileira.
  return console.log(
    `Valor a ser pago em ${obterNomeMes(mes).toUpperCase()} ${brl.format(
      valorMensal
    )}`
  );
}

// Função que retorna o nome do mês com base no número do mês.
function obterNomeMes(mes) {
  const nomeMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return nomeMeses[mes - 1];
}

// Chama a função calcular com o mês 4 (abril).
calcular(4);
