// Esta função recebe dois parâmetros, 'min' e 'max', e retorna um número inteiro aleatório entre esses valores, incluindo 'min' e excluindo 'max'.
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min; // Gera um número decimal aleatório entre 'min' e 'max'.
    return Math.floor(valor); // Arredonda o número decimal para o número inteiro mais próximo.
}

let opcao = 0; // Inicializa a variável 'opcao' com o valor 0.

do {
    opcao = getInteiroAleatorioEntre(-1, 10); // Chama a função para obter um número inteiro aleatório entre -1 e 9.
    console.log(`Opção escolhida foi ${opcao}`); // Exibe no console a opção escolhida.
} while (opcao != -1); // O loop continua enquanto 'opcao' for diferente de -1.

console.log('Até a próxima!'); // Quando 'opcao' se torna -1, o loop termina, e esta mensagem é exibida no console.
