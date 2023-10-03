// Função que calcula a diferença de altura entre duas pessoas e o crescimento em um ano.
function altura(altura1, altura2, taxaCrescimento1, taxaCrescimento2) {
  // Calcula a diferença de altura entre Pedro e Marcos.
  let comparacaoAltura1 = (altura2 - altura1).toFixed(2);
  let comparacaoAltura2 = (altura1 - altura2).toFixed(2);

  // Calcula a altura de Marcos e Pedro em um ano, adicionando as taxas de crescimento.
  let taxaCresc1 = parseFloat(altura1 + taxaCrescimento1).toFixed(2);
  let taxaCresc2 = parseFloat(altura2 + taxaCrescimento2).toFixed(2);

  // Verifica se Pedro é mais alto do que Marcos.
  if (altura1 < altura2) {
    console.log(`Marcos: ${altura1}cm \nPedro: ${altura2}cm\n`);
    console.log(`Pedro tem ${comparacaoAltura1}cm a mais do que Marcos.\n`);
    console.log(
      `Em um ano, Marcos terá ${taxaCresc2}cm, que é ${taxaCrescimento2}cm a mais que Pedro.`
    );
  }
  // Verifica se Marcos é mais alto do que Pedro.
  else if (altura2 < altura1) {
    console.log(`Pedro: ${altura1}cm \nMarcos: ${altura2}cm`);
    console.log(`Marcos tem ${comparacaoAltura2}cm a mais do que Pedro.\n`);
    console.log(
      `Em um ano, Pedro terá ${taxaCresc1}cm, que é ${taxaCrescimento1}cm a mais que Marcos.`
    );
  }
  // Caso ambos tenham a mesma altura inicial, exibe uma mensagem de dados inválidos.
  else {
    console.log("Dados inválidos.");
  }
}

// Chama a função altura com valores de exemplo.
altura(1.1, 1.12, 7, 6);
