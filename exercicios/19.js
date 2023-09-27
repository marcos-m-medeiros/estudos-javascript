// Definindo constantes com os preços dos produtos.
const cachorroQuente = 3;
const hambSimples = 4;
const cheeseBurg = 5.5;
const bauru = 7.5;
const refri = 3.5;
const suco = 2.8;

// Declarando variáveis que serão usadas para armazenar o valor total e a formatação em moeda brasileira.
let total;
let brlBR = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

// Definindo uma função 'cardapio' que aceita dois parâmetros: o código do produto (cod) e a quantidade (qtd).
const cardapio = (cod, qtd) => {
    switch (cod) {
        // Para cada código de produto, calcula o total com base na quantidade e exibe uma mensagem.
        case 100:
            total = cachorroQuente * qtd;
            console.log('Você escolheu: ' + qtd + ' cachorro(s) quente(s)');
            console.log('Total: ' + brlBR.format(total));
            break;
        case 200:
            total = hambSimples * qtd;
            console.log('Você escolheu: ' + qtd + ' hambúrguer(es) simples');
            console.log('Total: ' + brlBR.format(total));
            break;
        case 300:
            total = cheeseBurg * qtd;
            console.log('Você escolheu: ' + qtd + ' cheeseburguer(s)');
            console.log('Total: ' + brlBR.format(total));
            break;
        case 400:
            total = bauru * qtd;
            console.log('Você escolheu: ' + qtd + ' bauru(s)');
            console.log('Total: ' + brlBR.format(total));
            break;
        case 500:
            total = refri * qtd;
            console.log('Você escolheu: ' + qtd + ' refrigerante(s)');
            console.log('Total: ' + brlBR.format(total));
            break;
        case 600:
            total = suco * qtd;
            console.log('Você escolheu: ' + qtd + ' suco(s)');
            console.log('Total: ' + brlBR.format(total));
            break;
        default:
            console.log('Produto não existente.');
            break;
    }
}

// Chama a função 'cardapio' com o código 200 (hambúrguer simples) e a quantidade 2 como argumentos.
cardapio(200, 2);