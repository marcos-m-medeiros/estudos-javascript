// Define uma função chamada 'getInteiroAleatorioEntre' que gera um número inteiro aleatório entre 'min' (inclusive) e 'max' (exclusivo).
function getInteiroAleatorioEntre(min, max) {
  // Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo), multiplica pelo intervalo desejado e adiciona o mínimo para garantir que o número gerado esteja dentro do intervalo desejado.
  const valor = Math.random() * (max - min) + min;

  // Usa 'Math.floor' para arredondar o número para o inteiro mais próximo e retorna o resultado.
  return Math.floor(valor);
}

// Inicializa a variável 'opcao' com o valor 0.
let opcao = 0;

// Inicia um loop 'while' que continuará até que a 'opcao' seja igual a -1.
while (opcao != -1) {
  // Chama a função 'getInteiroAleatorioEntre' com os valores -1 (mínimo) e 10 (máximo) para gerar um número aleatório.
  opcao = getInteiroAleatorioEntre(-1, 10);

  // Imprime no console a opção escolhida.
  console.log(`Opção escolhida foi ${opcao}`);
}

// Após o loop, imprime "Até a próxima!" no console.
console.log("Até a próxima!");