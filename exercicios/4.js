function res(n1, n2) {
    let divisao = n1 / n2
    let resto = n1 % n2
    let resultado = ['Divisão: ' + divisao , 'Resto: ' + resto]

    return resultado
}

console.log(res(30,4))