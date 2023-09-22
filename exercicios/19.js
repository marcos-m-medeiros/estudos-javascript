/*
O cardápio de uma lanchonete é o seguinte:

Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const cachorroQuente = 3
const hambSimples = 4
const cheeseBurg = 5.5
const bauru = 7.5
const refri = 3.5
const suco = 2.80
let total
let brlBR = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

const cardapio = (cod, qtd) => {
    switch (cod) {
        case 100:
            total = cachorroQuente * qtd
            console.log('Você escolheu: ' + qtd + ' cachorro(s) quente(s)')
            console.log('Total: ' + brlBR.format(total))
            break
        case 200:
            total =  hambSimples * qtd
            console.log('Você escolheu: ' + qtd + ' hambúrguer(es) simples')
            console.log('Total: ' + brlBR.format(total))
            break
        case 300:
            total =  cheeseBurg * qtd
            console.log('Você escolheu: ' + qtd + ' cheeseburguer(s)')
            console.log('Total: ' + brlBR.format(total))
            break
        case 400:
            total =  bauru * qtd
            console.log('Você escolheu: ' + qtd + ' bauru(s)')
            console.log('Total: ' + brlBR.format(total))
            break
        case 500:
            total =  refri * qtd
            console.log('Você escolheu: ' + qtd + ' refrigerante(s)')
            console.log('Total: ' + brlBR.format(total))
            break
        case 600:
            total =  suco * qtd
            console.log('Você escolheu: ' + qtd + ' suco(s)')
            console.log('Total: ' + brlBR.format(total))
            break
        default:
            console.log('Produto não existente.')
            break
    }
}

cardapio(200, 2)