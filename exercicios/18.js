// Defina uma função chamada numExtenso que recebe um número inteiro como argumento.
let numExtenso = (numInt) => {
    // Use uma instrução switch para verificar o valor do número inteiro.
    switch (numInt) {
        case 0:
            console.log('Zero'); // Se for 0, imprima "Zero".
            break;
        case 1:
            console.log('Um'); // Se for 1, imprima "Um".
            break;
        case 2:
            console.log('Dois'); // Se for 2, imprima "Dois".
            break;
        case 3:
            console.log('Três'); // Se for 3, imprima "Três".
            break;
        case 4:
            console.log('Quatro'); // Se for 4, imprima "Quatro".
            break;
        case 5:
            console.log('Cinco'); // Se for 5, imprima "Cinco".
            break;
        case 6:
            console.log('Seis'); // Se for 6, imprima "Seis".
            break;
        case 7:
            console.log('Sete'); // Se for 7, imprima "Sete".
            break;
        case 8:
            console.log('Oito'); // Se for 8, imprima "Oito".
            break;
        case 9:
            console.log('Nove'); // Se for 9, imprima "Nove".
            break;
        case 10:
            console.log('Dez'); // Se for 10, imprima "Dez".
            break;
        default:
            console.log('Número fora do intervalo 0 - 10'); // Se for um número fora do intervalo, imprima uma mensagem de erro.
            break;
    }
}

// Chame a função numExtenso com um número de exemplo (0) para ver a conversão por extenso.
numExtenso(0);