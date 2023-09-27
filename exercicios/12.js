// Esta é a definição da função 'fatorial' que aceita um parâmetro 'num'.
function fatorial(num) {
    // Primeira verificação: Se 'num' for menor que 0, retorna -1, indicando um valor inválido.
    if (num < 0) {
        return -1;
    }
    // Segunda verificação: Se 'num' for igual a 0, retorna 1, pois o fatorial de 0 é definido como 1.
    else if (num == 0) {
        return 1;
    }
    // Terceira verificação: Caso contrário, calcula o fatorial de 'num' usando recursão.
    else {
        // A função chama a si mesma com 'num - 1' e multiplica o resultado por 'num', repetindo até que 'num' seja 0.
        return (num * fatorial(num - 1));
    }
}

// Chama a função 'fatorial' com o valor 5 como argumento e imprime o resultado no console.
console.log(fatorial(5)); // Isso imprimirá o fatorial de 5, que é 120.