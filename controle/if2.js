// Define a função 'teste1' que aceita um número 'num' como argumento.
function teste1(num) {
    // Verifica se 'num' é maior que 7.
    if (num > 7)
      console.log(num); // Se 'num' for maior que 7, imprime 'num'.
  
    console.log("Final"); // Sempre imprime "Final" após a verificação anterior, esteja ela verdadeira ou falsa.
  }
  
  // Chama a função 'teste1' com o valor 6 e depois com o valor 8 (linhas comentadas).
  // Quando chamada com 6, não há saída porque a condição (num > 7) é falsa.
  // Quando chamada com 8, a saída será 8 e "Final" porque a condição é verdadeira.
  // No entanto, as chamadas estão comentadas, então o programa não as executa.
  
  // Define a função 'teste2' que aceita um número 'num' como argumento.
  function teste2(num) {
    // Esta linha parece indicar uma condição, mas na verdade, devido ao ponto e vírgula após 'if (num > 7)', ela se torna uma instrução vazia independente da condição.
    if (num > 7);
    {
      console.log(num); // Esta instrução sempre será executada, independentemente do valor de 'num'.
    }
  }
  
  // Chama a função 'teste2' com o valor 6 e depois com o valor 8.
  // Em ambos os casos, a saída será o valor de 'num' porque a instrução 'console.log(num)' não está condicionada à instrução 'if (num > 7)' devido ao ponto e vírgula.
  teste2(6); // Saída: 6
  teste2(8); // Saída: 8